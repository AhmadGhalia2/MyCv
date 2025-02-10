import './submitted.css'
export default function Submitted({ isVisable, onClose, status }) {
  const messageStyle = {
    color: status === 'success' ? 'green' : 'red'
  }
  if (isVisable) {
    return (
      <div className="submitted" onClick={onClose}>
        <div className="submitted-container" style={messageStyle}>
          <h1>
            {status === 'success' ? 'Thank you for reaching out! We will get back to you soon.' : 'There was an error sending your message. Please try again.'}
          </h1>


        </div>
      </div>
    );
  }
  return null
}