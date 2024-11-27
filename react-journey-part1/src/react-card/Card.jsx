import profile from '../assets/profile.jpg'

function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <img src={profile} alt="Profile Image" className="card-img" />
            </div>
            <div className="card-body">
                <h1 className='name'>John Ford Buliag</h1>
                <h3 className='course'>BS Computer Science</h3>

                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea rerum laborum quisquam, nemo ratione explicabo. Odio rem facere a exercitationem tempore id deserunt, dignissimos vel explicabo fuga, culpa cum.</p>

                <button className="card-btn">HIRE ME</button>
            </div>
        </div>
    );
}

export default Card