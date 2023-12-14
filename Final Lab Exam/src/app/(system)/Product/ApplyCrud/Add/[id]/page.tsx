export default function Add( {params} : {params:{userid: string}} ){
    return (
        <>
            <h1>Want to Add new Product ?</h1>
            <h2>Product ID:{params.userid} </h2>
            <h2>Product Name:</h2>
            <h2>Product Price</h2>
            
            
        </>
    );
}