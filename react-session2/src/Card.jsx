import profile from './assets/profile.jpg'

function Card() {
    return (
        <div className="card">
            <img src={profile} alt="Profile Image" />

            <h2>John Ford Buliag</h2>
            <p>Aspiring Software Engineer</p>
        </div>
    );
}

export default Card