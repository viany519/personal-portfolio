import previewImage from "./assets/images/hotel-dashboard-preview.png";

function SheetIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2v5h5M8 12h8M8 16h8M8 8h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function ArrowIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function HotelDashboardViewer(){
  return <main className="excel-viewer-page">
    <header className="excel-viewer-topbar">
      <a href="./hotel-booking-case-study.html" className="excel-viewer-back"><ArrowIcon/> Back to case study</a>
      <div className="excel-viewer-title"><SheetIcon/><span>Hotel Booking Dashboard</span></div>
      {/* <a className="excel-viewer-download" href="./files/hotel_booking_cancellation.xlsx" download>Download Excel</a>*/}
    </header>

    <section className="excel-viewer-hero">
      <div>
        <span>EXCEL DASHBOARD PREVIEW</span>
        <h1>Dashboard preview</h1>
        <p>Explore the Hotel Booking Cancellation Analysis dashboard, highlighting key insights, booking trends, and cancellation patterns.</p>
      </div>
    </section>

    <section className="excel-viewer-image-shell">
      <img src={previewImage} alt="Hotel Booking Cancellation Dashboard Preview"/>
    </section>
  </main>;
}
