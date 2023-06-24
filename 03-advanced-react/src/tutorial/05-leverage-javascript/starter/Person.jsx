import avatar from '../../../assets/default-avatar.svg';

const Person = ({ id, name, nickName, images = [] }) => {
  // const image = images && images[0] && images[0].small && images[0].small.url;
  const image = images[0]?.small?.url ?? avatar;
  
  return (
    <div>
      <img src={image} alt={id} style={{ width: '50px'}} />
      <h4>{name}</h4>
      {nickName && <p>NickName: {nickName}</p>}
    </div>
  )
}
export default Person