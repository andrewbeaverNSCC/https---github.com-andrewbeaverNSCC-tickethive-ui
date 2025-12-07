export default function PurchaseCard({ register, errors, onSubmit, handleSubmit, id, concertTitle }) {
  return (
    <div className="card p-4 shadow-sm" style={{ borderRadius: 8 }}>
      <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Purchase Tickets for {concertTitle} Concert</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" defaultValue={id} {...register('ConcertId')} />

        {/* Error handling: Reqired, Minimum of 1 ticket */}
        <div className="mb-3">
          <label htmlFor="numoftickets" className="form-label">Number of Tickets</label>
          <input
            type="number"
            id="numoftickets"
            className="form-control"
            defaultValue={1}
            {...register('NumOfTickets', { 
              required: 'Number of Tickets is required', 
              valueAsNumber: true,
              min: { value: 1, message: 'Number of Tickets must be a positive integer.' }
            })}
          />
          {errors.NumOfTickets && <span className="text-danger">{errors.NumOfTickets.message}</span>}
        </div>

        {/* Error handling: Name required */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register('Name', { required: 'Name is required'})}
          />
          {errors.Name && <span className="text-danger">{errors.Name.message}</span>}
        </div>

        {/* Error handling:  Email required and formatted properly*/}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register('Email', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Valid email is required' }
            })}
          />
          {errors.Email && <span className="text-danger">{errors.Email.message}</span>}
        </div>

        {/* Error handling:  Name required*/}
        <div className="mb-3">
          <label htmlFor="nameoncard" className="form-label">Name on Card</label>
          <input
            type="text"
            id="nameoncard"
            className="form-control"
            {...register('NameOnCard', { required: 'Name on card is required'})}
          />
          {errors.NameOnCard && <span className="text-danger">{errors.NameOnCard.message}</span>}
        </div>

        {/* Error handling: Number required inside the max length*/}
        <div className="mb-3">
          <label htmlFor="cardnumber" className="form-label">Card Number</label>
          <input
            type="text"
            id="cardnumber"
            className="form-control"
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            {...register('CardNumber', { required: 'Card Number is required' })}
          />
          {errors.CardNumber && <span className="text-danger">{errors.CardNumber.message}</span>}
        </div>

        {/* Error handling: Date required */}
        <div className="mb-3">
          <label htmlFor="expirationdate" className="form-label">Expiration Date</label>
          <input
            type="month"
            id="expirationdate"
            className="form-control"
            {...register('ExpirationDate', { required: 'Expiration date is required' })}
          />
          {errors.ExpirationDate && <span className="text-danger">{errors.ExpirationDate.message}</span>}
        </div>

        {/* Error handling:  CVV required, max 3 digits*/}
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            id="cvv"
            className="form-control"
            maxLength={3}
            {...register('CVV', { required: 'CVV is required' })}
          />
          {errors.CVV && <span className="text-danger">{errors.CVV.message}</span>}
        </div>

        <input type="submit" value="Purchase" className="btn btn-primary" />
      </form>
    </div>
  )
}