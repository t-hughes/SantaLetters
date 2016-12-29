app.controller('letterCreateCtrl', function($scope, $state, letterCreateSrv) {

//User Deets and Delivery Form Info Sending saved in the service until it is sent to the DB on the last step.

// $scope.saveFinalCustomer = function (data){
//   $scope.saveCustomerData(data);
//   letterCreateSrv.createFinalCustomer();
// };


// Order data

$scope.getOrderData = function() {
  console.log('FETCHING ORDER DATA FROM SERVICE...');
  $scope.order = letterCreateSrv.getOrderData();

  if($scope.order[1] != null) {
    console.log('letterData:', $scope.order[1]);
    $scope.letterData = $scope.order[1].letterData;
  }
  if($scope.order[2] != null) {
    console.log('customerData:', $scope.order[2]);
    $scope.customerData = $scope.order[2].customerData;
  }

};

$scope.savePackageData = function(data) {
  console.log('SENDING PACKAGE DATA TO SERVICE...', data);
  letterCreateSrv.savePackageData(data);
};


$scope.saveOrderData = function(data) {
  console.log('SENDING ORDER DATA TO SERVICE...', data);
  letterCreateSrv.saveOrderData(data);
};

$scope.getOrderData();


////////////////////////////////
//////////ng-options////////////
//Personalized Letter Changes///
///////////////////////////////
$scope.selectAgeFilter = [
  {id: 0, name: "Childs Age", enabled: false},
  {id: 1, name: "Newborn to 12 months old", list: "I want to first congratulate you for making it on the the Nice list so quickly for your very first Christmas!"},
  {id: 2, name: "1 year old", list: "I first want to let you know that you have done so much good this year that you're at the tope of the Nice list for 1 year olds!"},
  {id: 3, name: "2 years old", list: "The Elves just let me know that they penciled your name in on the Nice list for 2 year olds!"},
  {id: 4, name: "3 years old", list: "Mrs. Clause and I were just checking the Nice list for 3 year olds and guess who we saw on it? You!"},
  {id: 5, name: "4 years old", list: "I'd like to first let you know that Rudolph helped me write your name on the Nice list for 4 year olds. I can't beleive I almost forgot! Make sure to thank Rudoplh next time you see him!"},
  {id: 6, name: "5 years old", list: "You did it! You made the Nice list for 5 year olds this year! When I read your name out loud, the whole North Pole erupted in cheers. Good job!"},
  {id: 7, name: "6 years old", list: "I was reviewing my Nice list for 6 year olds when I couldn't beleive I saw your name! I can't beleive you're already 6 years old! Good job on making it on the Nice list for yet another year."},
  {id: 8, name: "7 years old", list: "It brought a great big grin to my face when I came across your name on the Nice list for 7 year olds! I knew you would make it, just like you do every year!"},
  {id: 9, name: "8 years old", list: "I was reviewing my Nice list and it brought me great joy to see your name right near the top for 8 year olds"},
  {id: 10, name: "9 years old", list: "The Elves and reindeer wanted me to congratulate you for making the Nice list again! The Nice list for 9 year olds isn't that easy to get on. Well done!"},
  {id: 11, name: "10 years old", list: "for 10 year olds"},
  {id: 12, name: "11 years old", list: "I want to first congratulate you for making it on the Nice list for 12 year olds. Not only are you on the Nice list, but you’re in the top 10, well done!"},
  {id: 13, name: "12 years old", list: "I first want to express my deepest gratitude to you for making it on the Nice list for 12 year olds this year. You must have been quite good this year! Thank you!"},
  {id: 14, name: "13 years old", list: "I'll be honest, at first I thought I lost my Nice list for 13 year olds this year, but I found it stuck between Rudolph's teeth! I was happy to see your name right near the top! Well done!"},
  {id: 15, name: "14 years old", list: "The Elves and reindeer wanted me to congratulate you for making the Nice list again this year! The Nice list for 13 year olds isn't that easy to get on. Well done!"},
  {id: 16, name: "15 years old", list: "I'd first like to let you know about the panic you caused me the other day. While I was reviewing my Nice list for 15 year olds I didn't see your name! It wasn't until Mrs. Claus showed me you were right on the back page. You made it right in time. Great job! "},
  {id: 17, name: "16 years old", list: "I wasn't surprised when I came across your name on the Nice list for 16 year olds. You have been on the Nice list every year for the past 15 years! That has to be some kind of record, too bad I don't have a list for 16 year old record holders."},
];

$scope.selectGenderFilter = [
  {id: 0, name:"Childs Gender", enabled: false},
  {id: 1, name: "Girl", gender: "girl"},
  {id: 2, name: "Boy", gender: "boy"},
  {id: 3, name: "Do Not Specify (Kid)", gender: "kid"},
];

$scope.selectBehaviorFilter = [
  {id: 0, name: "Who Could Report The Childs Behavior?", enabled: false},
  {id: 1, name: "Mom", behavior: "Mom"},
  {id: 2, name: "Dad", behavior: "Dad"},
  {id: 3, name: "Mom & Dad", behavior: "Mom & Dad"},
  {id: 4, name: "Grandma", behavior: "Grandma"},
  {id: 5, name: "Grandpa", behavior: "Grandpa"},
  {id: 6, name: "Grandma & Grandpa", behavior: "Grandma & Grandpa"},
];

$scope.selectPrefixFilter = [
  {id: 0, name: "---",enabled: false},
  {id: 1, name: "a", prefix: "a"},
  {id: 2, name: "an", prefix: "an"},
  {id: 3, name: "the", prefix: "the"},
  {id: 4, name: "more", prefix: "more"},
  {id: 5, name: "some", prefix: "some"},
];

$scope.selectFriendFilter = [
  {id: 0, name: "---", enabled: false},
  {id: 1, name: "Best friend", friend: "best friend"},
  {id: 2, name: "Brother", friend: "brother"},
  {id: 3, name: "Sister", friend: "sister"},
  {id: 4, name: "Pet", friend: "pet"},
  {id: 5, name: "Teacher", friend: "teacher"},
];

$scope.selectEventFilter = [
  {id: 1, name: "Select an event that occurred in the past 12 months", enabled: false},
  {id: 2,name: "child/family got a new pet dog", para: "I see you got a pet dog this year. I'll be as quiet as a mouse and be sure not to wake your dog when I visit on Christmas Eve! I only ask that you teach him not to bite me as I come down the chimney!"},
  {id: 3, name: "child/family got a new pet cat", para: "I see you got a new pet cat this year. I promise not to drink all the milk so your kitty can have some on Christmas morning! I can't say the same for the cookies though!"},
  {id: 4, name: "child/family got a new pet rabbit", para: "I see you got a new pet rabbit this year. Do you think it's related to the Easter Bunny? He did told me at dinner once that many of his brothers and sisters wanted to grow up to be professional pet bunnies!"},
  {id: 5, name: "Child learned to walk", para: "Mrs. Claus told me you have learned to walk! When you feel ready, feel free to walk over here to the North Pole and help me feed the reindeer and keep the elves in check."},
  {id: 6, name: "Child lost their first tooth", para: "The tooth fairy told me he visted your house and took your first tooth! I hope he left a generous gift under your pillow. Make sure to keep smiling!"},
  {id: 7, name: "Child became potty trained", para: "What great news! The elves just told me you are now potty trained. All of us here at the North Pole are so proud of you! Make sure to keep your hands clean by washing them after each time you go potty."},
  {id: 8, name: "Child learned to walk", para: "Mrs. Claus just informed me that you learned to walk! That is great news! Do you have a favorite pair of snow boots that you love to play in the snow with? I do! Mine are black and lined with fur. They have bells that jingle when I walk."},
  {id: 9, name: "Child is learning to count", para: "I hear you have been learning to count. Counting is a great skill to have! I count all the children on the nice and naughty lists. If you want to practice counting, you could make a calendar so you can count down the days till Christmas!"},
  {id: 10, name: "Child learned to count", para: "Mrs. Claus told me you have learned to count. That is fantastic news! Countng is a great skill to have. I have to count my reindeer to make sure none of them have wondered off before we fly around the world. If you haven't already, you could make a calendar to count down the days till Christmas!"},
  {id: 11, name: "Child is learning to write", para: "I hear you're learning to write. That's fantastic! Did you write the letter Mrs Claus passed me earlier? I hope Rudolph didn't eat them! Make sure to practice daily and you'll be writing letters like this one in no time. If you want to practice writing, why don't you write back to me and let me know how you enjoyed your Christmas!"},
  {id: 12, name: "Child is learning to read", para: "My Head Elf told me you've been busy learning to read this year. Keep at it and make sure to read everyday. What has been your favorite book so far? You could practice by trying to read my letter on your own! Don't be scared to ask for help if you can't read my handwriting."},
  {id: 13, name: "Child is learning/learned to ride a bike", para: "The Elves took the reindeer out flying to streatch their legs and they told me they saw you learning to ride your bike! I hope you didn't fall and skin an elbow or knee! Be sure to always wear a helmet to protect your head and look both ways before crossing the street."},
  {id: 14, name: "Child joined a soccer team", para: "The Elves tell me you've joined a soccer team. What a great idea! Your coach said you are a great team player and you are always trying your best at games and practices. What is your favorite part about the team? Dont forget to keep practicing your ball control, passing, and shooting and you'll be a star player in no time! Oh, and do me a favor and wear your shin guards!"},
  {id: 15, name: "Child joined a basketball team", para: "The Elves tell me you've joined a basketball team. What a great idea! Your coach said you are a great team player and you are always trying your best at games and practices. What is your favorite part about the team? Dont forget to keep practicing your defense, passing, and shooting and you'll be a star player in no time! Oh, and do me a favor and practice your free throws!"},
  {id: 16, name: "Child joined a baseball team", para: "The Elves tell me you've joined a baseball team. What a great idea! Your coach said you are a great team player and you are always trying your best at games and practices. What is your favorite part about the team? Dont forget to keep practicing catching, throwing, and batting and you'll be a star player in no time! Oh, and do me a favor and keep your eye on the ball!"},
  {id: 17, name: "Child joined a football team", para: "The Elves tell me you've joined a football team. What a great idea! Your coach said you are a great team player and you are always trying your best at games and practices. What is your favorite part about the team? Dont forget to keep practicing your plays, ball handling, and running and you'll be a star player in no time! Oh, and do me a favor and wear all your pads!"},
  {id: 18, name: "Child joined any athletics team", para: "The Elves tell me you've joined an athletics team. What a great idea! Your coach said you are a great team player and you are always trying your best at and practices. What is your favorite part about the team? Don't forget to keep practicing and training so you can stay one of the best!"},
  {id: 19, name: "Child is learning/learned to swim", para: "Mrs. Claus told me you've been swimming in the pool a lot this year. Swimming has never been my strong suit, but I love it nonetheless. However, I think I'll stick to flying. How long do you think it would take me to swim all around the world? I think it would take me far too long. The elves slow me down when they float on my belly! Silly fellas!"},
  {id: 20, name: "Child/Family moved", para: "I heard you moved this year. What is your favorite thing about your new residence? Don't worry, I had the elves take Rudolph out to find your new address so we won't miss it on our route this Christmas Eve! Rudolph never gets lost with his bright glowing red nose!"},
  {id: 21, name: "Child started school", para: "My Head Elf told me you started school this year. What a great adventure! What is your favorite subject? I liked all the subjects when I was in school. Your teacher said you are a great help, have made lots of friends and that you're getting good grades. Keep it up!"},
  {id: 22, name: "Child got a new little brother", para: "Mrs. Claus told me you were introduced to your new little brother this year! That is great news! Oh, and do you know what? He is on the Nice List this year as well! Do me a favor and thank your little brother for being so good and congratulate him for getting on the Nice List so quickly! Also, be sure not to pick on him so you can stay you on the Nice List!"},
  {id: 23, name: "Child got a new little sister", para: "Mrs. Claus told me you were introduced to your new little sister this year! That is great news! Oh, and do you know what? She is on the Nice List this year as well! Do me a favor and thank your little sister for being so good and congratulate her for getting on the Nice List so quickly! Also, be sure not to pick on her so you can stay you on the Nice List!"},
  {id: 24, name: "Child got twin little brothers", para: "Mrs. Claus told me you were introduced to your new little brothers this year! That is great news! Oh, and do you know what? They are on the Nice List this year as well! Do me a favor and thank your little brothers for being so good and congratulate them for getting on the Nice List so quickly! Also, be sure not to pick on them so you can stay you on the Nice List!"},
  {id: 25, name: "Child got twin little sisters", para: "Mrs. Claus told me you were introduced to your new little sisters this year! That is great news! Oh, and do you know what? They are on the Nice List this year as well! Do me a favor and thank your little brothers for being so good and congratulate them for getting on the Nice List so quickly! Also, be sure not to pick on them so you can stay you on the Nice List!"},
  {id: 26, name: "Child got twin little brother and sister", para: "Mrs. Claus told me you were introduced to your new little brothers this year! That is great news! Oh, and do you know what? They are on the Nice List this year as well! Do me a favor and thank your little brothers for being so good and congratulate them for getting on the Nice List so quickly! Also, be sure not to pick on them so you can stay you on the Nice List!"},
  {id: 27, name: "Child went to the zoo", para: "Rudolph was telling me he saw you at the zoo this year. Did you happen to see a reindeer with a bright glowing red nose? After you left, all the animals told him they were glad you came to visit and they hope to see you again soon. If you get a chance to go again can you do me a favor by waving at all of the animals for me? I'd appreciate it greatly!"},
  {id: 28, name: "Child visited the ocean", para: "The Elves got word of your visit to the ocean this year. They told me you had lots of fun. Would you recommend the beach you visited? Mrs. Claus has been taking such good care of me as I prepare to deliver all of these gifts on Christmas Eve, I wanted to surprise her with a vacation to the ocean this summer!"},
  {id: 29, name: "Child visited the mountains", para: "Rudolph went for a test flight around the mountains today and he told me he saw you walking about on the mountain trails. He said you looked like you were enjoying yourself and having lots of fun! What is the neatest thing you have seen in the mountains? I have always loved the mountains, but my boots are made for soft snow! Maybe I should ask the elves to teach me how to make a nice pair of black hiking boots. Hopefully they can teach me how to put bells on them! "},
];



});
