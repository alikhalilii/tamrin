const stopWatch =function stopWatch(){
    let startTime , endTime , duration = 0
    let running = 0
    this.start = function(){
        if (running === true)
            throw new Error("its already started")

        running = true
        startTime = new Date()

    }
    this.end = function(){
        if (running = false)
            throw new Error("its not started")

        running=false
        endTime = new Date()
        let getSeconds = (endTime.getTime()-startTime.getTime())/1000
        duration += getSeconds
    }
    this.reset = function(){
        startTime = null
        endTime = null
        getSeconds = 0
        running = false
    }
    Object.defineProperty(this, "duration",{
        get: function(){
            return duration
        }
    })

}
let sw = new stopWatch()