const CheckinCheckBox = () => {
  return (
    <div className="my-10 space-y-4">
      <section className="bg-white rounded-md shadow-md py-5 px-5 flex items-center gap-4">
        <input type="checkbox" name="breakfast" id="breakfast" className=" cursor-pointer" />
        <label htmlFor="breakfast">Want to add breakfast for $420.00?</label>
      </section>
      <section className="bg-white rounded-md shadow-md py-5 px-5 flex items-center gap-4">
        <input type="checkbox" name="total_price" id="total_price" className=" cursor-pointer" />
        <label htmlFor="total_price">
            I confirm that Jonas Schmedtmann has paid the total amount of $4,550.00
        </label>
      </section>
    </div>
  )
}

export default CheckinCheckBox