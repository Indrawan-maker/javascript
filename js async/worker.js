addEventListener("message",function(){

    const total = message.data

    for (let i = 0; i < total; i ++){
        this.postMessage(i)
    }
})