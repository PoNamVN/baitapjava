function varScopeExample() {
    if (true) {
        var a = 10;
    }
    console.log(a);
}

varScopeExample();

function letScopeExample() {
    if (true) {
        let b = 20;
        console.log(b);

}
}

let TinhTong = () =>{
    let arr = [2,7,3,1,0,8,9,15];
    let sum = 0;
    let sumC = 0;
    let sumL = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        if(arr[i]%2==0){
            sumC+=arr[i];
        } else{
            sumL+=arr[i];
        }
    }
    console.log(`Tong la: ${sum}`);
    console.log(`Tong chan la: ${sumC}`);
    console.log(`Tong le la: ${sumL}`);
}
TinhTong();













async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const userData = await response.json();

    const { id, name, email, address: { street, city } } = userData;

    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Street: ${street}`);
    console.log(`City: ${city}`);

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

fetchUserData();
