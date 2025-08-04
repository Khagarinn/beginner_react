function Card({ name = "Lorem Ipsum", length = 0 }: props) {

    return (
        <div className="card">
            <img className="card-image" src="https://picsum.photos/150" alt="profile picture"></img>
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{length}</p>
        </div>
  );
}
type props = {
  name?: string;
  length?: number;
};
export default Card;