
const Users=[
{
    name:"Abcdefg",
    city:"korea",
    description:"Frontend Developer",
    skills:["UI&UX","HTML","CSS","REACT","JAVASCRIPT","BOOTSTRAP"],
    online: false,
    profile:"images/a.jpg",

},
{
    name:"Hijklmn",
    city:"korea",
    description:"Backend Developer",
    skills:["PYTHON","DJANGO","FLASK","NODE JS","EXPRESS JS"],
    online: true,
    profile:"images/b.jpg",

},
{
    name:"Opqrstu",
    city:"Thailand",
    description:"AI Engineer",
    skills:["PYTHON","MACHINE LEARNING","DEEP LEARNING","DATA ANALYSIS"],
    online: false,
    profile:"images/c.jpg",

},
{
    name:"Vwxyz",
    city:"Thailand",
    description:"Full Stack Developer",
    skills:["PYTHON","DJANGO","FLASK","NODE JS","EXPRESS JS","HTML","CSS","REACT","JAVASCRIPT"],
    online: true,
    profile:"images/d.jpg",

}
];
function UserData(props){
    return(
        <div className='card-container'>
            <span className='pro'
            style={{backgroundColor:props.online ? "greenyellow" : "rgb(207, 85, 85)"}}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="img" className='images' />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className='buttons'>
                <button className='primary-inline'>Message</button>
                <button className='primary-outline'>Following</button>
                <div className='skills'>
                    <h6>Skills</h6>
                    <ul>
                       {props.skills.map((skill,index) => (
                        <li key={index}>{skill}</li>
                       ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export const User = () => {
  return (
    <div>
        {Users.map((user,index) => (
            <UserData 
            key={index}  
            name={user.name} 
            city={user.city}
            description={user.description}
            online={user.online}
            profile={user.profile}
           skills={user.skills} 
        />
         ))}
      
    </div>
  )
}
