var twoSum=function(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return[i,j];
            }
        }
    }
    return null
};

var result=twoSum([1,2,3,4,5,10],9);
console.log(result);

