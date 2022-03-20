class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:new, :create, :login]
    
    def index
        users = User.all
        render json: users.to_json(:include => [:topics, {:meetups => {:include => :topic}}, :comments])
    end

    def show
        user = find_user
        render json: user.to_json(:include => [:topics, {:meetups => {:include => :topic}}, :comments])
    end
    
    def create
        user = User.new(user_params)
        user.save
        params["topicArray"].each do  |topic| 
        UserTopic.create(user_id: user.id, topic_id: topic["id"])
        end

        if user.valid?
        render json: user
        else  
            render json: {error: "Failed to create user"}
        end
    end
    
    def update
        user = find_user
        topic = Topic.find(user_params[:topic_ids])
        meetup = User.find(user_params[:meetup_ids])
        comment = Comment.find(user_params[:comment_ids])

        if user.valid?
            user.topics << topic unless user.topics.include? topic 
            user.meetups << meetup unless user.meetups.include? meetup 
            user.comments << comment unless user.comments.include? comment 
        end
    end

    def destroy
        user = find_user
        user.destroy 
        head :no_content
    end


    # CUSTOM ROUTES

    def edit
        user = find_user
    end

    def loggedInUser 
        # user = find_user
        # render json: user
        render json: @current_user
    end

    def joinMeetup 
        UserMeetup.find_or_create_by(user_id: params[:user_id], meetup_id: params[:meetup_id])
    end

    def leaveMeetup
        um = UserMeetup.find_by(user_id: params[:user_id], meetup_id: params[:meetup_id])
        um.delete
    end

    def deleteTopic
        topic = UserTopic.find_by(user_id: params[:user_id], topic_id: params[:topic_id])
        topic.delete
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:topic_ids, :meetup_ids, :comment_ids, :first_name, :email, :password, :topicArray)
    end
end
