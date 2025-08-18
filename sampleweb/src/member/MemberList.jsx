export default function MemberList({members, onRemove}) {


  return (
    <ul>
      {members.map((member, index) => (
        <li key={index}>{member.name}
          <button onClick={() => onRemove(index)}> 삭제</button>
        </li>
      ))}
    </ul>
  );
}