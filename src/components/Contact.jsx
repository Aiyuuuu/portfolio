function Contact({id}) {
    return <>
        <div className="contact" id={id}>
            <h1>Contact</h1>
            <div className="contact-area">
                <div className="input-area">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea name="" id="" placeholder="Message"></textarea>
                </div>
                <div className="contact-detail-area">
                    <p>Don't Hesitate to reach out to me! Thanks for your time reviewing my portfolio.</p>
                </div>
            </div>
        </div>
    </>
}

export default Contact