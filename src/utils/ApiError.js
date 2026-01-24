class ApiError extends Error{
     constructor(
        statuscode,
        message="something went wrong",
        error=[],
        statck=""
     )
     {
     super(message)//jb bhi override krte hai tb supercall use krte hai
     this.statusCode=statusCode
     this.data=null
     this.message=message
     this.success=false
     this.errors=errors
     
     if(stack){
        this.stack=stack
     }else{
        error.captureStackTrace(this,this.constructor)
     }
}
}
export {ApiError}