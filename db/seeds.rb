# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Topic.destroy_all
Meetup.destroy_all
UserMeetup.destroy_all
Comment.destroy_all
UserTopic.destroy_all

puts "Seeding users..."

joe = User.create(first_name: "Joe", email: "Joe@joe.com", password: "j")
amy = User.create(first_name: "Amy", email: "Amy@amy.com", password: "a")
bob = User.create(first_name: "Bob", email: "Bob@bob.com", password: "b")
joy = User.create(first_name: "Joy", email: "Joy@joy.com", password: "j")
jim = User.create(first_name: "Jim", email: "Jim@jim.com", password: "j")
liz = User.create(first_name: "Liz", email: "Liz@liz.com", password: "l")

ana = User.create(first_name: "Ana", email: "Ana@ana.com", password: "a")
dan = User.create(first_name: "Dan", email: "Dan@dan.com", password: "d")
cat = User.create(first_name: "Cat", email: "Cat@cat.com", password: "c")
sam = User.create(first_name: "Sam", email: "Sam@sam.com", password: "s")
ron = User.create(first_name: "Ron", email: "Ron@ron.com", password: "r")
vee = User.create(first_name: "Vee", email: "Vee@vee.com", password: "v")

puts "Seeding topics..."

mexican = Topic.create(topic_name: "Real Madrid", description: "Team")
thai = Topic.create(topic_name: "Paris Saint Germain", description: "Team")
chinese = Topic.create(topic_name: "Liverpool", description: "Team")
japanese = Topic.create(topic_name: "Manchester United", description: "Team")
italian = Topic.create(topic_name: "Manchester City", description: "Team")
french = Topic.create(topic_name: "Chelsea", description: "Team")

southern = Topic.create(topic_name: "Arsenal", description: "Team")
spanish = Topic.create(topic_name: "Aston Villa", description: "Team")
korean = Topic.create(topic_name: "Everton", description: "Team")
moroccan = Topic.create(topic_name: "Leeds United", description: "Team")
peruvian = Topic.create(topic_name: "Nottingham Forest", description: "Team")
dutch = Topic.create(topic_name: "West ham united", description: "Team")

puts "Seeding meetups..."

mexicanclass = Meetup.create(title: "GeorgeTown soccer adventure", date: "May 1", time: "2pm", location: "Georgetown", topic_id: mexican.id,
    image: "http://guhoyas.com/images/2015/10/15/shaw-field-1015.jpg")

thaiclass = Meetup.create(title: "LA soccer meet", date: "May 5", time: "1pm", location: "Los Angeles", topic_id: thai.id,
    image: "https://www.lacitycollege.edu/LACC/media/Kinesiology-Health-Dance/facilities/outdoor/outdoor_soccer02.jpg?ext=.jpg")

chineseclass = Meetup.create(title: "University of Washington", date: "May 2", time: "3pm", location: "Washington", topic_id: chinese.id,
    image: "https://gohuskies.com/images/2020/8/10/uw_msoc_denver_095.JPG")

japaneseclass = Meetup.create(title: "Manhattan Park", date: "Apr 1", time: "1pm", location: "Manhattan", topic_id: japanese.id,
    image: "https://static.wixstatic.com/media/2dfde3_d5577f7ce1204b8ba788fff5f2170bc3~mv2_d_1839_2441_s_2.png/v1/fill/w_1000,h_1327,al_c,usm_0.66_1.00_0.01/2dfde3_d5577f7ce1204b8ba788fff5f2170bc3~mv2_d_1839_2441_s_2.png")

italianclass = Meetup.create(title: "Tropical Park", date: "Apr 4", time: "4pm", location: "Miami", topic_id: italian.id,
    image: "https://media2.miaminewtimes.com/mia/imager/u/golden-m/9409633/city-soccer-morganlevy-credit_photo_by_sports_turf_one.jpg?cb=1642614295")

frenchclass = Meetup.create(title: "Western New England University", date: "Aug 15", time: "10am", location: "New England", topic_id: french.id,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk77u9K1eRiF2OLp4D4EU18279gLkuKp8Kog&usqp=CAU")
    

southernclass = Meetup.create(title: "ESPN Wide World of sports ", date: "Jul 10", time: "9am", location: "Kissimmee", topic_id: southern.id,
    image: "https://www.305sports.net/wp-content/uploads/sites/6/2020/05/hess-sports-fields-complex-slide-1.jpg")

spanishclass = Meetup.create(title: "Premier sports campus", date: "Jun 11", time: "3pm", location: "Overland", topic_id: spanish.id,
    image: "https://lakewoodranch.com/wp-content/uploads/2016/08/LocationPhoto_01-3.jpg")

koreanclass = Meetup.create(title: "Brooklyn Bridge Park", date: "Mar 1", time: "4pm", location: "U Street", topic_id: korean.id,
    image: "https://www.brooklynbridgepark.org/wp-content/uploads/2020/09/Brooklyn-Bridge-Park-Pier-5-soccer-turf-night-scaled-980x1230-c-default.jpg")

moroccanclass = Meetup.create(title: "Reach 111 sports complex", date: "Jul 9", time: "10am", location: "H Street", topic_id: moroccan.id,
    image: "https://fastly.4sqi.net/img/general/600x600/11798642_4nPhQJG-L4JCIzZkWUGGd6BFccJekApsAYsv-ZzfjEw.jpg")

peruvianclass = Meetup.create(title: "Bryan park soccer complex", date: "Nov 4", time: "7pm", location: "Chinatown", topic_id: peruvian.id,
    image: "https://ohenryhotel.com/wp-content/uploads/2018/03/17499081_1489280771090628_3320484580671254087_n.jpg")

dutchclass = Meetup.create(title: "Burbank soccer complex", date: "Sep 9", time: "5pm", location: "Brookland", topic_id: dutch.id,
    image: "https://bloximages.newyork1.vip.townnews.com/theadvocate.com/content/tncms/assets/v3/editorial/2/b1/2b1757bb-0bb7-5c40-bf2e-dafceb6b1665/5ca41f68d7610.image.jpg?resize=692%2C500")


puts "Seeding user_meetups..."

meetup1 = UserMeetup.create(user_id: jim.id, meetup_id: mexicanclass.id)
meetup2 = UserMeetup.create(user_id: liz.id, meetup_id: thaiclass.id)
meetup3 = UserMeetup.create(user_id: joe.id, meetup_id: frenchclass.id)
meetup4 = UserMeetup.create(user_id: amy.id, meetup_id: italianclass.id)
meetup5 = UserMeetup.create(user_id: bob.id, meetup_id: japaneseclass.id)
meetup6 = UserMeetup.create(user_id: joy.id, meetup_id: chineseclass.id)

meetup7 = UserMeetup.create(user_id: ana.id, meetup_id: mexicanclass.id)
meetup8 = UserMeetup.create(user_id: dan.id, meetup_id: frenchclass.id)
meetup9 = UserMeetup.create(user_id: cat.id, meetup_id: italianclass.id)
meetup10 = UserMeetup.create(user_id: sam.id, meetup_id: japaneseclass.id)
meetup11 = UserMeetup.create(user_id: ron.id, meetup_id: chineseclass.id)
meetup12 = UserMeetup.create(user_id: vee.id, meetup_id: thaiclass.id)

meetup13 = UserMeetup.create(user_id: jim.id, meetup_id: peruvianclass.id)
meetup14 = UserMeetup.create(user_id: liz.id, meetup_id: dutchclass.id)
meetup15 = UserMeetup.create(user_id: joe.id, meetup_id: southernclass.id)
meetup16 = UserMeetup.create(user_id: amy.id, meetup_id: spanishclass.id)
meetup17 = UserMeetup.create(user_id: bob.id, meetup_id: koreanclass.id)
meetup18 = UserMeetup.create(user_id: joy.id, meetup_id: moroccanclass.id)

meetup19 = UserMeetup.create(user_id: ana.id, meetup_id: dutchclass.id)
meetup20 = UserMeetup.create(user_id: dan.id, meetup_id: southernclass.id)
meetup21 = UserMeetup.create(user_id: cat.id, meetup_id: spanishclass.id)
meetup22 = UserMeetup.create(user_id: sam.id, meetup_id: koreanclass.id)
meetup23 = UserMeetup.create(user_id: ron.id, meetup_id: moroccanclass.id)
meetup24 = UserMeetup.create(user_id: vee.id, meetup_id: peruvianclass.id)

puts "Seeding comments..."

comment1 = Comment.create(content: "This was a lot of fun!", rating: 7, user_id: liz.id, meetup_id: meetup2.id)
comment2 = Comment.create(content: "The event helped me improve my soccer skills!", rating: 8, user_id: joe.id, meetup_id: meetup6.id)
comment3 = Comment.create(content: "USA soccer renewed my girls interest in soccer and with its positive environment boosted their self esteem. Thank you for such a great experience", rating: 9, user_id: amy.id, meetup_id: meetup5.id)
comment4 = Comment.create(content: "It was an extremely well run camp with a fine professional cadre of instructors.", rating: 10, user_id: bob.id, meetup_id: meetup4.id)
comment5 = Comment.create(content: "This is one of the best programs my son has taken... I highly recommend the program to all. My son loved it!", rating: 8, user_id: joy.id, meetup_id: meetup3.id)
comment6 = Comment.create(content: "I can’t think of anything you could do better", rating: 5, user_id: jim.id, meetup_id: meetup1.id)

comment7 = Comment.create(content: "the experience could have been better...", rating: 6, user_id: vee.id, meetup_id: meetup1.id)
comment8 = Comment.create(content: "Lucie loved every aspect of your program. It far exceeded what we expected it was going to be", rating: 4, user_id: dan.id, meetup_id: meetup6.id)
comment9 = Comment.create(content: "I have had my son with USA before and have always been impressed with how well they teach skills and how they make it fun for the kids", rating: 8, user_id: cat.id, meetup_id: meetup5.id)
comment10 = Comment.create(content: "I thought this was an extraordinary first time experience for my 5 year old son", rating: 9, user_id: sam.id, meetup_id: meetup4.id)
comment11 = Comment.create(content: "I think the program was perfect. My child showed no interest in soccer until this class. Thank you for all of your hard work", rating: 10, user_id: ron.id, meetup_id: meetup3.id)
comment12 = Comment.create(content: "I have to say your coaching staff were second to none. I will recommend this program to my players and other coaches", rating: 3, user_id: ana.id, meetup_id: meetup2.id)

puts "Seeding user_topics..."

usertopic1 = UserTopic.create(user_id: joe.id, topic_id: french.id)
usertopic2 = UserTopic.create(user_id: amy.id, topic_id: italian.id)
usertopic3 = UserTopic.create(user_id: bob.id, topic_id: japanese.id)
usertopic4 = UserTopic.create(user_id: joy.id, topic_id: chinese.id)
usertopic5 = UserTopic.create(user_id: jim.id, topic_id: thai.id)
usertopic6 = UserTopic.create(user_id: liz.id, topic_id: mexican.id)

usertopic7 = UserTopic.create(user_id: ana.id, topic_id: thai.id)
usertopic8 = UserTopic.create(user_id: dan.id, topic_id: french.id)
usertopic9 = UserTopic.create(user_id: cat.id, topic_id: italian.id)
usertopic10 = UserTopic.create(user_id: sam.id, topic_id: japanese.id)
usertopic11 = UserTopic.create(user_id: ron.id, topic_id: chinese.id)
usertopic12 = UserTopic.create(user_id: vee.id, topic_id: mexican.id)

usertopic13 = UserTopic.create(user_id: joe.id, topic_id: southern.id)
usertopic14 = UserTopic.create(user_id: amy.id, topic_id: spanish.id)
usertopic15 = UserTopic.create(user_id: bob.id, topic_id: korean.id)
usertopic16 = UserTopic.create(user_id: joy.id, topic_id: moroccan.id)
usertopic17 = UserTopic.create(user_id: jim.id, topic_id: peruvian.id)
usertopic18 = UserTopic.create(user_id: liz.id, topic_id: dutch.id)

usertopic19 = UserTopic.create(user_id: ana.id, topic_id: dutch.id)
usertopic20 = UserTopic.create(user_id: dan.id, topic_id: southern.id)
usertopic21 = UserTopic.create(user_id: cat.id, topic_id: spanish.id)
usertopic22 = UserTopic.create(user_id: sam.id, topic_id: korean.id)
usertopic23 = UserTopic.create(user_id: ron.id, topic_id: moroccan.id)
usertopic24 = UserTopic.create(user_id: vee.id, topic_id: peruvian.id)

team1 = Team.create(user_id: ron.id, name: "Atlanta United", location: "Atlanta, Georgie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Atlanta_MLS.svg/1200px-Atlanta_MLS.svg.png", webpage: "https://www.atlutd.com/tickets/")
team2 = Team.create(user_id: ana.id, name: "Austin FC", location: "Austin, Texas", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Austin_FC_logo.svg/1200px-Austin_FC_logo.svg.png", webpage: "https://www.austinfc.com/tickets/")
team3 = Team.create(user_id: ron.id, name: "Charlotte FC", location: "Charlotte, North Carolina", image: "https://2.bp.blogspot.com/-C-WHWfmR7YA/Xxhgz36YxbI/AAAAAAACh6c/BDcRil2hvnAfbAebu2O1viaP7IR-qy_LACNcBGAsYHQ/s1600/charlotte-fc-mls%2B%25281%2529.png", webpage: "https://www.charlottefootballclub.com/tickets/")
team4 = Team.create(user_id: cat.id, name: "Chicago Fire FC", location: "Chicago, Illinois", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/CHI_Logo-2021.svg", webpage: "https://www.ticketmaster.com/chicago-fire-tickets/artist/805916?ac_link=MLS_TM_CHI_MLS_SPLASH&home_away=home&_ga=2.177003557.1232974125.1657046043-426811513.1657046043")
team5 = Team.create(user_id: ron.id, name: "FC Cincinnati", location: "Cincinnati, Ohio", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/FC_Cincinnati_primary_logo_2018.svg/1200px-FC_Cincinnati_primary_logo_2018.svg.png", webpage: "https://www.fccincinnati.com/tickets/")
team6 = Team.create(user_id: sam.id, name: "Colorado Rapids", location: "Colorado,", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Colorado_Rapids_logo.svg/1200px-Colorado_Rapids_logo.svg.png", webpage: "https://www.coloradorapids.com/tickets/")
team7 = Team.create(user_id: ron.id, name: "Columbus Crew", location: "Columbus, Ohio", image: "https://s1.ticketm.net/dam/a/d4e/308fb8da-601f-468b-ba46-9f647737ed4e_1437441_TABLET_LANDSCAPE_LARGE_16_9.jpg", webpage: "https://www.columbuscrew.com/tickets/")
team8 = Team.create(user_id: dan.id, name: "D.C. United", location: "Washington D.C", image: "https://yt3.ggpht.com/ytc/AKedOLQ1ujP2ptbWMRT5NyX6sALvUVFawIevJzZKikghmg=s900-c-k-c0x00ffffff-no-rj", webpage: "https://www.dcunited.com/tickets/")
team9 = Team.create(user_id: ron.id, name: "FC Dallas", location: "Dallas, Texas", image: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/185.png", webpage: "https://www.fcdallas.com/tickets/")
team10 = Team.create(user_id: sam.id, name: "Houston Dynamo FC", location: "Houston, Texas", image: "https://yt3.ggpht.com/ytc/AKedOLTThF4P4PxcdSI-rpt_dzVTNUYLm7krCfc9_WVae3o=s900-c-k-c0x00ffffff-no-rj", webpage: "https://www.houstondynamofc.com/tickets/")
team11 = Team.create(user_id: vee.id, name: "Sporting Kansas City", location: "Kansas City, Missouri", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Sporting_Kansas_City_logo.svg/1200px-Sporting_Kansas_City_logo.svg.png", webpage: "https://www.sportingkc.com/")
team12 = Team.create(user_id: ron.id, name: "LA Galaxy", location: "Los Angelas, California", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Los_Angeles_Galaxy_logo.svg/1200px-Los_Angeles_Galaxy_logo.svg.png", webpage: "https://www.lagalaxy.com/tickets/")
team13 = Team.create(user_id: dan.id, name: "Los Angeles Football Club", location: "Los Angelas, California", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Los_Angeles_Football_Club.svg/1200px-Los_Angeles_Football_Club.svg.png", webpage: "https://www.lafc.com/tickets/")
team14 = Team.create(user_id: ron.id, name: "Inter Miami CF", location: "Miami, Florida", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/800px-Inter_Miami_CF_logo.svg.png", webpage: "https://www.intermiamicf.com/tickets/")
team15 = Team.create(user_id: vee.id, name: "Minnesota United", location: "Minnesota", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Minnesota_United_FC_%28MLS%29_Primary_logo.svg/1200px-Minnesota_United_FC_%28MLS%29_Primary_logo.svg.png", webpage: "https://www.mnufc.com/tickets/")
team16 = Team.create(user_id: ron.id, name: "CF Montreal", location: "Montreal, Canada", image: "https://yt3.ggpht.com/ytc/AKedOLR1CMFnW99akwqPf83T2V9Hc2soGiMnY55LiHCkHg=s900-c-k-c0x00ffffff-no-rj", webpage: "https://www.cfmontreal.com/")
team17 = Team.create(user_id: vee.id, name: "Nashville SC", location: "Nashville, Tennesse", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nashville_SC_MLS_2020.svg/1200px-Nashville_SC_MLS_2020.svg.png", webpage: "https://www.nashvillesc.com/tickets/")
team18 = Team.create(user_id: ron.id, name: "New England Revolution", location: "New England", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/New_England_Revolution_%282021%29_logo.svg/1200px-New_England_Revolution_%282021%29_logo.svg.png", webpage: "https://www.revolutionsoccer.net/tickets/")
team19 = Team.create(user_id: cat.id, name: "New York Red Bulls ", location: "New York", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/New_York_Red_Bulls_logo.svg/1200px-New_York_Red_Bulls_logo.svg.png", webpage: "https://www.newyorkredbulls.com/tickets/")
team20 = Team.create(user_id: ron.id, name: "New York City FC ", location: "New York", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/New_York_City_FC.svg/1200px-New_York_City_FC.svg.png", webpage: "https://www.nycfc.com/tickets/")
team21  = Team.create(user_id: sam.id, name: "Orlando City", location: "Orlando, Florida", image: "https://images.mlssoccer.com/image/upload/v1623172020/assets/orl/logos/ORL-thumbnail.jpg", webpage: "https://www.orlandocitysc.com/tickets/")
team22  = Team.create(user_id: ron.id, name: "Philadelphia Union", location: "Philadelphia, Pennslyvania", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Philadelphia_Union_2018_logo.svg/800px-Philadelphia_Union_2018_logo.svg.png", webpage: "https://www.philadelphiaunion.com/tickets/")
team23 = Team.create(user_id: dan.id, name: "Portland Timbers", location: "Portland, Oregon", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Portland_Timbers_logo.svg/1200px-Portland_Timbers_logo.svg.png", webpage: "https://www.timbers.com/tickets/")
team24 = Team.create(user_id: vee.id, name: "Real Salt Lake", location: "Utah", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Real_Salt_Lake_2010.svg/1200px-Real_Salt_Lake_2010.svg.png", webpage: "https://www.rsl.com/tickets/")
team25 = Team.create(user_id: vee.id, name: "San Jose Earthquakes", location: "San Jose, California", image: "https://yt3.ggpht.com/ytc/AKedOLRFdijJ48z6u2Khvi58xuJlVNzKiRAsoi6oUiXmOQ=s900-c-k-c0x00ffffff-no-rj", webpage: "https://www.sjearthquakes.com/tickets/")
team26 = Team.create(user_id: sam.id, name: "Seattle Sounders FC", location: "Seattle, Washington", image: "https://cdn.vox-cdn.com/thumbor/JSJj-eHiJcyDN3VahBS1eZ1v7Vk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19370162/EJG_lI2VUAErsl9.jpeg", webpage: "https://www.soundersfc.com/tickets/")
team27 = Team.create(user_id: cat.id, name: "Toronto FC", location: "Toronto, Canada", image: "https://s1.ticketm.net/dam/a/1be/18eab145-37bd-43df-b6ac-e1909778e1be_1334111_TABLET_LANDSCAPE_LARGE_16_9.jpg", webpage: "https://www.torontofc.ca/tickets/")
team28 = Team.create(user_id: sam.id, name: "Vancouver Whitecaps FC", location: "Vancouver, Canada", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Vancouver_Whitecaps_FC_logo.svg/800px-Vancouver_Whitecaps_FC_logo.svg.png", webpage: "https://www.whitecapsfc.com/tickets/")



puts "Seeding Teams...."

puts "DONE SEEDING!"