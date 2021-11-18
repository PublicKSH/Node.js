//this 바인드 방식
var relationship1 = {
    name: 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this; // relationship1을 가리키는 this 를 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
            });
        },
    };
relationship1.logFriends();

var relationship2 = {
    name: 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend)
        });
    },
};
relationship2.logFriends();