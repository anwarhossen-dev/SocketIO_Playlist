

export const orderHandler = (io, Socket) =>{
    console.log("order handler called for socket: " + Socket.id);

    //emit -> trigger -> on -> listen
    //place order
    Socket.on("placeOrder", async (Data, callback)=>{
        try{
            console.log(`placed order from ${Socket.id}`)
            const validation = validateOrder(data);

        }catch(error){
            console.log(error);

        }
    })
}