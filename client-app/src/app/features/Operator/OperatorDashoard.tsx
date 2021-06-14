import OperatorOrder from "./OperatorOrder";

const OperatorDashoard = () => {
    return (
        <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Top Navigation</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="/">Dashboard</a></div>
              <div className="breadcrumb-item"><a href="/">Layout</a></div>
              <div className="breadcrumb-item">Top Navigation</div>
            </div>
          </div>

          <div className="section-body">

          
<OperatorOrder/>
         
          </div>
        </section>
      </div>
    )
}

export default OperatorDashoard
