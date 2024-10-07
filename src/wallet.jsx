export default function wallet({money}){
    return (
        <>
            <div className="card">
                <div className="card-header">
                Check your balance :
                </div>
            <div className="card-body">
                <h5 className="card-title">My-wallet</h5>
                <p className="card-text">{}</p>
                <a href="#" className="btn btn-primary">{money}</a>
            </div>
            </div>
        </>
    )
}