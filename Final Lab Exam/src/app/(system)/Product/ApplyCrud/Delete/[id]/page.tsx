export default function Delete( {params} : {params:{userid: string}} ){
    return (
        <>
            <h1>Want to Delete this Product ?</h1>
            <h2>Product ID:{params.userid} </h2>
            <h2>Product Name:</h2>
            <h2>Product Price</h2>
            
            
        </>
    );
}