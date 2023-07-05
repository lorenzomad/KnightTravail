const Move = (x,y) => {

    const cell = [x, y]
    
    let _predecessor = null
    let _distance = null

    return {
        cell,
        get predecessor () {
            return _predecessor
        },
        set predecessor(newpred) {
            _predecessor = newpred
        },
        get distance () {
            return _distance
        },
        set distance (newdistance) {
            _distance = newdistance
        }        
    }

}

export default Move