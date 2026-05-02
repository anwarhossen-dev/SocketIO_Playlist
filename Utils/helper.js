export function validateOrder(data){
    if(!data.customerName?.trim()){
        return{
            
                valid: false, message: 'Customer name is required'
            
        }
    }
    if(!data.customerPhone?.trim()){
        return{
            
                valid: false, message: 'Customer phone is required'
            
        }
    }
    if(!data.customerAddress?.trim()){
        return{
            
                valid: false, message: 'Customer address is required'
            
        }
    }
    if(!data.items || !Array.isArray(data.items)){
        return{
            valid: false, message: 'Order must have at least one item'
        };
    }


 }