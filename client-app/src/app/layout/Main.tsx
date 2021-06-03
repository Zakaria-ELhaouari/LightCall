import React from "react";
import BalanceChart from "../charts/BalanceChart"
import LineChart from "../charts/LineChart"

const Main = () => {


return (
<div className="main-content">
  <section className="section">
    <div className="section-header">
      <h1>Dashboard</h1>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-primary">
            <i className="far fa-user"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Total Admin</h4>
            </div>
            <div className="card-body">
              10
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-danger">
            <i className="far fa-newspaper"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>News</h4>
            </div>
            <div className="card-body">
              42
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-warning">
            <i className="far fa-file"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Reports</h4>
            </div>
            <div className="card-body">
              1,201
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-success">
            <i className="fas fa-circle"></i>
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Online Users</h4>
            </div>
            <div className="card-body">
              47
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-md-12 col-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4>Statistics</h4>
            <div className="card-header-action">
              <div className="btn-group">
                <a href="#" className="btn btn-primary">Week</a>
                <a href="#" className="btn">Month</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <canvas id="myChart" height="607" style={{display: 'block', width: '1002px', height: '607px'}}
              className="chartjs-render-monitor"></canvas>
            <div className="statistic-details mt-sm-4">
              <div className="statistic-details-item">
                <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up"></i></span>
                  7%</span>
                <div className="detail-value">$243</div>
                <div className="detail-name">Today's Sales</div>
              </div>
              <div className="statistic-details-item">
                <span className="text-muted"><span className="text-danger"><i className="fas fa-caret-down"></i></span>
                  23%</span>
                <div className="detail-value">$2,902</div>
                <div className="detail-name">This Week's Sales</div>
              </div>
              <div className="statistic-details-item">
                <span className="text-muted"><span className="text-primary"><i
                      className="fas fa-caret-up"></i></span>9%</span>
                <div className="detail-value">$12,821</div>
                <div className="detail-name">This Month's Sales</div>
              </div>
              <div className="statistic-details-item">
                <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up"></i></span>
                  19%</span>
                <div className="detail-value">$92,142</div>
                <div className="detail-name">This Year's Sales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4>Recent Activities</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled list-unstyled-border">
              <li className="media">
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-1.png" alt="avatar" />
                <div className="media-body">
                  <div className="float-right text-primary">Now</div>
                  <div className="media-title">Farhan A Mujib</div>
                  <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.</span>
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-2.png" alt="avatar" />
                <div className="media-body">
                  <div className="float-right">12m</div>
                  <div className="media-title">Ujang Maman</div>
                  <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.</span>
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-3.png" alt="avatar" />
                <div className="media-body">
                  <div className="float-right">17m</div>
                  <div className="media-title">Rizal Fakhri</div>
                  <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.</span>
                </div>
              </li>
              <li className="media">
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-4.png" alt="avatar" />
                <div className="media-body">
                  <div className="float-right">21m</div>
                  <div className="media-title">Alfa Zulkarnain</div>
                  <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin.</span>
                </div>
              </li>
            </ul>
            <div className="text-center pt-1 pb-1">
              <a href="#" className="btn btn-primary btn-lg btn-round">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        <div className="card">
          <div className="card-header">
            <h4>Referral URL</h4>
          </div>
          <div className="card-body">
            <div className="mb-4">
              <div className="text-small float-right font-weight-bold text-muted">2,100</div>
              <div className="font-weight-bold mb-1">Google</div>
              <div className="progress" data-height="3" style={{height: '3px'}}>
                <div className="progress-bar" role="progressbar" data-width="80%" aria-valuenow={80} aria-valuemin={0}
                  aria-valuemax={100} style={{width: '80%'}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-small float-right font-weight-bold text-muted">1,880</div>
              <div className="font-weight-bold mb-1">Facebook</div>
              <div className="progress" data-height="3" style={{height: '3px'}}>
                <div className="progress-bar" role="progressbar" data-width="67%" aria-valuenow={25} aria-valuemin={0}
                  aria-valuemax={100} style={{width: '67%'}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-small float-right font-weight-bold text-muted">1,521</div>
              <div className="font-weight-bold mb-1">Bing</div>
              <div className="progress" data-height="3" style={{height: '3px'}}>
                <div className="progress-bar" role="progressbar" data-width="58%" aria-valuenow={25} aria-valuemin={0}
                  aria-valuemax={100} style={{width: '58%'}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-small float-right font-weight-bold text-muted">884</div>
              <div className="font-weight-bold mb-1">Yahoo</div>
              <div className="progress" data-height="3" style={{height: '3px'}}>
                <div className="progress-bar" role="progressbar" data-width="36%" aria-valuenow={25} aria-valuemin={0}
                  aria-valuemax={100} style={{width: '36%'}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-small float-right font-weight-bold text-muted">473</div>
              <div className="font-weight-bold mb-1">Kodinger</div>
              <div className="progress" data-height="3" style={{height: '3px'}}>
                <div className="progress-bar" role="progressbar" data-width="28%" aria-valuenow={25} aria-valuemin={0}
                  aria-valuemax={100} style={{width: '28%'}}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-small float-right font-weight-bold text-muted">418</div>
              <div className="font-weight-bold mb-1">Multinity</div>
              <div className="progress" data-height="3" style={{height: '3px'}}>
                <div className="progress-bar" role="progressbar" data-width="20%" aria-valuenow={25} aria-valuemin={0}
                  aria-valuemax={100} style={{width: '20%'}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Popular Browser</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col text-center">
                <div className="browser browser-chrome"></div>
                <div className="mt-2 font-weight-bold">Chrome</div>
                <div className="text-muted text-small"><span className="text-primary"><i
                      className="fas fa-caret-up"></i></span> 48%</div>
              </div>
              <div className="col text-center">
                <div className="browser browser-firefox"></div>
                <div className="mt-2 font-weight-bold">Firefox</div>
                <div className="text-muted text-small"><span className="text-primary"><i
                      className="fas fa-caret-up"></i></span> 26%</div>
              </div>
              <div className="col text-center">
                <div className="browser browser-safari"></div>
                <div className="mt-2 font-weight-bold">Safari</div>
                <div className="text-muted text-small"><span className="text-danger"><i
                      className="fas fa-caret-down"></i></span> 14%</div>
              </div>
              <div className="col text-center">
                <div className="browser browser-opera"></div>
                <div className="mt-2 font-weight-bold">Opera</div>
                <div className="text-muted text-small">7%</div>
              </div>
              <div className="col text-center">
                <div className="browser browser-internet-explorer"></div>
                <div className="mt-2 font-weight-bold">IE</div>
                <div className="text-muted text-small"><span className="text-primary"><i
                      className="fas fa-caret-up"></i></span> 5%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-sm-5 mt-md-0">
          <div className="card-header">
            <h4>Visitors</h4>
          </div>
          <div className="card-body">
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="card">
          <div className="card-header">
            <h4>This Week Stats</h4>
            <div className="card-header-action">
              <div className="dropdown">
                <a href="#" className="dropdown-toggle btn btn-primary" data-toggle="dropdown">Filter</a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item has-icon"><i className="far fa-circle"></i> Electronic</a>
                  <a href="#" className="dropdown-item has-icon"><i className="far fa-circle"></i> T-shirt</a>
                  <a href="#" className="dropdown-item has-icon"><i className="far fa-circle"></i> Hat</a>
                  <div className="dropdown-divider"></div>
                  <a href="#" className="dropdown-item">View All</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="summary">
              <div className="summary-info">
                <h4>$1,053</h4>
                <div className="text-muted">Sold 3 items on 2 customers</div>
                <div className="d-block mt-2">
                  <a href="#">View All</a>
                </div>
              </div>
              <div className="summary-item">
                <h6>Item List <span className="text-muted">(3 Items)</span></h6>
                <ul className="list-unstyled list-unstyled-border">
                  <li className="media">
                    <a href="#">
                      <img className="mr-3 rounded" width="50" src="../assets/img/products/product-1-50.png"
                        alt="product" />
                    </a>
                    <div className="media-body">
                      <div className="media-right">$405</div>
                      <div className="media-title"><a href="#">PlayStation 9</a></div>
                      <div className="text-muted text-small">by <a href="#">Hasan Basri</a>
                        <div className="bullet"></div> Sunday
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <a href="#">
                      <img className="mr-3 rounded" width="50" src="../assets/img/products/product-2-50.png"
                        alt="product" />
                    </a>
                    <div className="media-body">
                      <div className="media-right">$499</div>
                      <div className="media-title"><a href="#">RocketZ</a></div>
                      <div className="text-muted text-small">by <a href="#">Hasan Basri</a>
                        <div className="bullet"></div> Sunday
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <a href="#">
                      <img className="mr-3 rounded" width="50" src="../assets/img/products/product-3-50.png"
                        alt="product" />
                    </a>
                    <div className="media-body">
                      <div className="media-right">$149</div>
                      <div className="media-title"><a href="#">Xiaomay Readme 4.0</a></div>
                      <div className="text-muted text-small">by <a href="#">Kusnaedi</a>
                        <div className="bullet"></div> Tuesday
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="d-inline">Tasks</h4>
            <div className="card-header-action">
              <a href="#" className="btn btn-primary">View All</a>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-unstyled list-unstyled-border">
              <li className="media">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="cbx-1" />
                  <label className="custom-control-label" htmlFor="cbx-1"></label>
                </div>
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-4.png" alt="avatar" />
                <div className="media-body">
                  <div className="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                  <h6 className="media-title"><a href="#">Redesign header</a></h6>
                  <div className="text-small text-muted">Alfa Zulkarnain <div className="bullet"></div> <span
                      className="text-primary">Now</span></div>
                </div>
              </li>
              <li className="media">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="cbx-2" />
                  <label className="custom-control-label" htmlFor="cbx-2"></label>
                </div>
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-5.png" alt="avatar" />
                <div className="media-body">
                  <div className="badge badge-pill badge-primary mb-1 float-right">Completed</div>
                  <h6 className="media-title"><a href="#">Add a new component</a></h6>
                  <div className="text-small text-muted">Serj Tankian <div className="bullet"></div> 4 Min</div>
                </div>
              </li>
              <li className="media">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="cbx-3" />
                  <label className="custom-control-label" htmlFor="cbx-3"></label>
                </div>
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-2.png" alt="avatar" />
                <div className="media-body">
                  <div className="badge badge-pill badge-warning mb-1 float-right">Progress</div>
                  <h6 className="media-title"><a href="#">Fix modal window</a></h6>
                  <div className="text-small text-muted">Ujang Maman <div className="bullet"></div> 8 Min</div>
                </div>
              </li>
              <li className="media">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="cbx-4" />
                  <label className="custom-control-label" htmlFor="cbx-4"></label>
                </div>
                <img className="mr-3 rounded-circle" width="50" src="../assets/img/avatar/avatar-1.png" alt="avatar" />
                <div className="media-body">
                  <div className="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                  <h6 className="media-title"><a href="#">Remove unwanted classes</a></h6>
                  <div className="text-small text-muted">Farhan A Mujib <div className="bullet"></div> 21 Min</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-5 col-md-12 col-12 col-sm-12">
        <form method="post" className="needs-validation">
          <div className="card">
            <div className="card-header">
              <h4>Quick Draft</h4>
            </div>
            <div className="card-body pb-0">
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" className="form-control" required />
                <div className="invalid-feedback">
                  Please fill in the title
                </div>
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea className="summernote-simple" style={{display: 'none'}}></textarea>
                <div className="note-editor note-frame card">
                  <div className="note-dropzone">
                    <div className="note-dropzone-message"></div>
                  </div>
                  <div className="note-toolbar card-header" role="toolbar">
                    <div className="note-btn-group btn-group note-style"><button type="button"
                        className="note-btn btn btn-light btn-sm note-btn-bold" role="button" tabIndex={-1} title=""
                        aria-label="Bold (CTRL+B)" data-original-title="Bold (CTRL+B)"><i
                          className="note-icon-bold"></i></button><button type="button"
                        className="note-btn btn btn-light btn-sm note-btn-italic" role="button" tabIndex={-1} title=""
                        aria-label="Italic (CTRL+I)" data-original-title="Italic (CTRL+I)"><i
                          className="note-icon-italic"></i></button><button type="button"
                        className="note-btn btn btn-light btn-sm note-btn-underline" role="button" tabIndex={-1}
                        title="" aria-label="Underline (CTRL+U)" data-original-title="Underline (CTRL+U)"><i
                          className="note-icon-underline"></i></button><button type="button"
                        className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                        aria-label="Remove Font Style (CTRL+\)" data-original-title="Remove Font Style (CTRL+\)"><i
                          className="note-icon-eraser"></i></button></div>
                    <div className="note-btn-group btn-group note-font"><button type="button"
                        className="note-btn btn btn-light btn-sm note-btn-strikethrough" role="button" tabIndex={-1}
                        title="" aria-label="Strikethrough (CTRL+SHIFT+S)"
                        data-original-title="Strikethrough (CTRL+SHIFT+S)"><i
                          className="note-icon-strikethrough"></i></button></div>
                    <div className="note-btn-group btn-group note-para">
                      <div className="note-btn-group btn-group"><button type="button"
                          className="note-btn btn btn-light btn-sm dropdown-toggle" role="button" tabIndex={-1}
                          data-toggle="dropdown" title="" aria-label="Paragraph" data-original-title="Paragraph"><i
                            className="note-icon-align-left"></i></button>
                        <div className="dropdown-menu" role="list">
                          <div className="note-btn-group btn-group note-align"><button type="button"
                              className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                              aria-label="Align left (CTRL+SHIFT+L)" data-original-title="Align left (CTRL+SHIFT+L)"><i
                                className="note-icon-align-left"></i></button><button type="button"
                              className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                              aria-label="Align center (CTRL+SHIFT+E)"
                              data-original-title="Align center (CTRL+SHIFT+E)"><i
                                className="note-icon-align-center"></i></button><button type="button"
                              className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                              aria-label="Align right (CTRL+SHIFT+R)"
                              data-original-title="Align right (CTRL+SHIFT+R)"><i
                                className="note-icon-align-right"></i></button><button type="button"
                              className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                              aria-label="Justify full (CTRL+SHIFT+J)"
                              data-original-title="Justify full (CTRL+SHIFT+J)"><i
                                className="note-icon-align-justify"></i></button></div>
                          <div className="note-btn-group btn-group note-list"><button type="button"
                              className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                              aria-label="Outdent (CTRL+[)" data-original-title="Outdent (CTRL+[)"><i
                                className="note-icon-align-outdent"></i></button><button type="button"
                              className="note-btn btn btn-light btn-sm" role="button" tabIndex={-1} title=""
                              aria-label="Indent (CTRL+])" data-original-title="Indent (CTRL+])"><i
                                className="note-icon-align-indent"></i></button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="note-editing-area">
                    <div className="note-handle">
                      <div className="note-control-selection">
                        <div className="note-control-selection-bg"></div>
                        <div className="note-control-holder note-control-nw"></div>
                        <div className="note-control-holder note-control-ne"></div>
                        <div className="note-control-holder note-control-sw"></div>
                        <div className="note-control-sizing note-control-se"></div>
                        <div className="note-control-selection-info"></div>
                      </div>
                    </div><textarea className="note-codable" role="textbox" aria-multiline="true"></textarea>
                    <div className="note-editable card-block" contentEditable={true} role="textbox"
                      aria-multiline="true" spellCheck={true} style={{minHeight: '150px'}}>
                      <p>
                        <br/>
                      </p>
                    </div>
                  </div><output className="note-status-output" aria-live="polite"></output>
                  <div className="note-statusbar" role="status"> <output className="note-status-output"
                      aria-live="polite"></output>
                    <div className="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">
                      <div className="note-icon-bar"></div>
                      <div className="note-icon-bar"></div>
                      <div className="note-icon-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer pt-0">
              <button className="btn btn-primary">Save Draft</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-7 col-md-12 col-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4>Latest Posts</h4>
            <div className="card-header-action">
              <a href="#" className="btn btn-primary">View All</a>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Introduction Laravel 5
                      <div className="table-links">
                        in <a href="#">Web Development</a>
                        <div className="bullet"></div>
                        <a href="#">View</a>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar"
                          width="30" className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                    </td>
                    <td>
                      <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title=""
                        data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a>
                      <a className="btn btn-danger btn-action trigger--fire-modal-1" data-toggle="tooltip" title=""
                        data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                        data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i
                          className="fas fa-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Laravel 5 Tutorial - Installation
                      <div className="table-links">
                        in <a href="#">Web Development</a>
                        <div className="bullet"></div>
                        <a href="#">View</a>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar"
                          width="30" className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                    </td>
                    <td>
                      <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title=""
                        data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a>
                      <a className="btn btn-danger btn-action trigger--fire-modal-2" data-toggle="tooltip" title=""
                        data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                        data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i
                          className="fas fa-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Laravel 5 Tutorial - MVC
                      <div className="table-links">
                        in <a href="#">Web Development</a>
                        <div className="bullet"></div>
                        <a href="#">View</a>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar"
                          width="30" className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                    </td>
                    <td>
                      <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title=""
                        data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a>
                      <a className="btn btn-danger btn-action trigger--fire-modal-3" data-toggle="tooltip" title=""
                        data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                        data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i
                          className="fas fa-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Laravel 5 Tutorial - Migration
                      <div className="table-links">
                        in <a href="#">Web Development</a>
                        <div className="bullet"></div>
                        <a href="#">View</a>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar"
                          width="30" className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                    </td>
                    <td>
                      <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title=""
                        data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a>
                      <a className="btn btn-danger btn-action trigger--fire-modal-4" data-toggle="tooltip" title=""
                        data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                        data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i
                          className="fas fa-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Laravel 5 Tutorial - Deploy
                      <div className="table-links">
                        in <a href="#">Web Development</a>
                        <div className="bullet"></div>
                        <a href="#">View</a>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar"
                          width="30" className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                    </td>
                    <td>
                      <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title=""
                        data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a>
                      <a className="btn btn-danger btn-action trigger--fire-modal-5" data-toggle="tooltip" title=""
                        data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                        data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i
                          className="fas fa-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Laravel 5 Tutorial - Closing
                      <div className="table-links">
                        in <a href="#">Web Development</a>
                        <div className="bullet"></div>
                        <a href="#">View</a>
                      </div>
                    </td>
                    <td>
                      <a href="#" className="font-weight-600"><img src="../assets/img/avatar/avatar-1.png" alt="avatar"
                          width="30" className="rounded-circle mr-1" /> Bagus Dwi Cahya</a>
                    </td>
                    <td>
                      <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title=""
                        data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a>
                      <a className="btn btn-danger btn-action trigger--fire-modal-6" data-toggle="tooltip" title=""
                        data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?"
                        data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i
                          className="fas fa-trash"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
)
}

export default React.memo(Main);