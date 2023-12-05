import { list } from "./_List"

export default function Student(){

    return(
        <>
             {list.map((student) => (

                <Display key={student.ID} Name={student.Name} ID={student.ID} CGPA= {student.CGPA}/>,
                <Remove key={student.ID} Name={student.Name} ID={student.ID} CGPA= {student.CGPA}/>

             ))}
        
        </>
    );

    function Display(props :any){
        return(

            <>
            Student Name: {props.Name}
            Student ID: {props.ID}
            Student CGPA: {props.CGPA}
            
            </>
        )
    }

    function Remove(props :any){
        return(

            <>
            
            
            </>
        )
    }



}