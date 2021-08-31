// task 3

function delay(data, ms){ 

	return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, ms);
      })
}

delay({name: "user"}, 1000).then((data) => console.log("Hello!", data));


//task 4

async function getUserInfo() {
  return delay({ name: 'Vic', age: 21, id: 1 }, 1000);
}
 
async function getUserAvatar(userInfo) {    
  userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
  return delay(userInfo, 1000);
  
}

async function getUserAdditionalInfo(userInfo) {
  userInfo.interests = ['sport', 'books'];
  return delay(userInfo, 1000);
  
}

async function getResult() { 
  let info = await getUserInfo();
  let avatar = await getUserAvatar(info);
  let result = await getUserAdditionalInfo(avatar);

  console.log(result);
}
 
getResult();
  

//task 5

async function getUser() {
  return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}
 
getInfo()
.then((res) => console.log(res))
.catch((error) => console.log('something went wrong ' + error))

