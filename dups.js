const arr = [11,12,13,11,14,15,14]

arr.map((d,i)=>{
    console.log(arr.indexOf(d), i)
    
})


const arr1 = [11,12,13,11,14,15,14]

arr1.map((d,i)=>{
    if(arr1.indexOf(d) !== i){
        console.log('duplicate found is', d, "at index", i)
    }
    
})


const obj = {
    name:'krish',
    id: 123
}

const obdata =Object.keys(obj)

obdata.map((d)=>{
    console.log(obj[d])
})

console.log(obj.name)