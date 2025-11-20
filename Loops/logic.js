let var1 = "Fullmetal Alchemist: BrotherhoodTV (64 eps)Apr 2009 - Jul 20103,218,472 membersManga StoreVolume 1€4.58Preview"

    let active = false
    let titleCollect = ''
for(let i = 0 ; i < var1.length ; i++){
    if(var1[i] === '('){
        active = true
        continue
    }
    if(var1[i] === ')'){
        break
    }

    if(active){
        titleCollect += var1[i]
    }
}


console.log(titleCollect)