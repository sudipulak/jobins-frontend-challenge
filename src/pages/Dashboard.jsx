import { useState } from 'react'
// Mock Data 
import mockData from '@/MOCK_DATA.json'
// Assets Import 
import totalSalesImage from '@/assets/business-and-finance.png'
import totalProfitImage from '@/assets/yen.png'
import USflag from '@/assets/us.png'
import Brazilflag from '@/assets/brazil.png'
import Australiaflag from '@/assets/australia.png'


const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // Pagination variables 
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const datas = mockData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(mockData.length / recordsPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1);
    // Pagination Previous Function 
    const prevPage = (e) => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
        e.preventDefault();
    }
    // Pagination Number Function 
    const changeCurrentPage = (id) => {
        setCurrentPage(id)
    }
    // Pagination Next Function
    const nextPage = () => {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <section className="dashboard">
            {/* Stastitic section   */}
            <div className="statistic">
                {/* Total Sales Card  */}
                <div className="card total-sales">
                    <div className="card-img-wrapper">
                        <div className="img-box">
                            <img src={totalSalesImage} alt="" />
                        </div>
                    </div>
                    <div className="card-content">
                        <p className='card-title'>Total Sales & Costs</p>
                        <span>Last 7 days</span>
                        <h3>$350K</h3>
                        <p className='card-description'><span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99998 2.95004C8.08887 2.95004 8.17221 2.96382 8.24998 2.99137C8.32776 3.01893 8.39998 3.06626 8.46665 3.13337L12.8667 7.53337C13 7.66671 13.0667 7.82493 13.0667 8.00804C13.0667 8.19115 13 8.3496 12.8667 8.48337C12.7333 8.61671 12.5778 8.68337 12.4 8.68337C12.2222 8.68337 12.0667 8.61671 11.9333 8.48337L8.66665 5.21671L8.66665 12.6834C8.66665 12.8723 8.60265 13.0278 8.47465 13.15C8.34665 13.2723 8.18843 13.3334 7.99998 13.3334C7.81109 13.3334 7.65265 13.2694 7.52465 13.1414C7.39665 13.0134 7.33287 12.8552 7.33332 12.6667L7.33332 5.21671L4.06665 8.48337C3.93332 8.61671 3.77776 8.68337 3.59998 8.68337C3.42221 8.68337 3.26665 8.61671 3.13332 8.48337C2.99998 8.35004 2.93332 8.1916 2.93332 8.00804C2.93332 7.82448 2.99998 7.66626 3.13332 7.53337L7.53332 3.13337C7.59999 3.06671 7.67221 3.01937 7.74998 2.99137C7.82776 2.96337 7.9111 2.9496 7.99998 2.95004Z" fill="#1EB564" />
                            </svg>
                            8.56K</span> vs last 7 days</p>
                    </div>
                </div>
                {/* Total Profit Card  */}
                <div className="card total-profit">
                    <div className="card-img-wrapper">
                        <div className="img-box">
                            <img src={totalProfitImage} alt="" />
                        </div>
                        <div className="title-wrapper">
                            <p>Total Profit</p>
                            <span>Last 7 days</span>
                        </div>
                    </div>
                    <div className="card-content">
                        <h3>50K</h3>
                        <p><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99998 2.95004C8.08887 2.95004 8.17221 2.96382 8.24998 2.99137C8.32776 3.01893 8.39998 3.06626 8.46665 3.13337L12.8667 7.53337C13 7.66671 13.0667 7.82493 13.0667 8.00804C13.0667 8.19115 13 8.3496 12.8667 8.48337C12.7333 8.61671 12.5778 8.68337 12.4 8.68337C12.2222 8.68337 12.0667 8.61671 11.9333 8.48337L8.66665 5.21671L8.66665 12.6834C8.66665 12.8723 8.60265 13.0278 8.47465 13.15C8.34665 13.2723 8.18843 13.3334 7.99998 13.3334C7.81109 13.3334 7.65265 13.2694 7.52465 13.1414C7.39665 13.0134 7.33287 12.8552 7.33332 12.6667L7.33332 5.21671L4.06665 8.48337C3.93332 8.61671 3.77776 8.68337 3.59998 8.68337C3.42221 8.68337 3.26665 8.61671 3.13332 8.48337C2.99998 8.35004 2.93332 8.1916 2.93332 8.00804C2.93332 7.82448 2.99998 7.66626 3.13332 7.53337L7.53332 3.13337C7.59999 3.06671 7.67221 3.01937 7.74998 2.99137C7.82776 2.96337 7.9111 2.9496 7.99998 2.95004Z" fill="#1EB564" />
                        </svg>12%</span> vs last 7 days</p>
                    </div>
                </div>
                {/* Countries Card  */}
                <div className="card countries">
                    <ul>
                        <li>
                            <div className="img-box">
                                <img src={USflag} alt="" />
                            </div>
                            <div className="stat">
                                <p>30k</p>
                                <p className='country'>United State</p>
                            </div>
                            <div className="stat-bar"></div>
                            <div className="status">
                                <p className='increase'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 13L10 8L15 13" stroke="#28C76F" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    25.8%</p>
                            </div>
                        </li>
                        <li>
                            <div className="img-box">
                                <img src={Brazilflag} alt="" />
                            </div>
                            <div className="stat">
                                <p>26k</p>
                                <p className='country'>Brazil</p>
                            </div>
                            <div className="stat-bar"></div>
                            <div className="status">
                                <p className='decrease'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 8L10 13L15 8" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    16.2%</p>
                            </div>
                        </li>
                        <li>
                            <div className="img-box">
                                <img src={Australiaflag} alt="" />
                            </div>
                            <div className="stat">
                                <p>17k</p>
                                <p className='country'>Australia</p>
                            </div>
                            <div className="stat-bar"></div>
                            <div className="status">
                                <p className='decrease'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 8L10 13L15 8" stroke="#EA5455" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    11.9%</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Info Section  */}
            <div className="info card">
                <div className="personal-information">
                    {/* Profile  */}
                    <div className='profile'>
                        <div className="img-box"></div>
                        <div className="description">
                            <h3>Robert Fox</h3>
                            <p>robert@gmail.com</p>
                        </div>
                    </div>
                    {/* Information  */}
                    <div className='information'>
                        <p>PERSONAL INFORMATION</p>
                        <p><span>Contact Number</span><b>(201) 555-0124</b></p>
                        <p><span>Date of Birth</span><b>1 Jan, 1985</b></p>
                        <p><span>Member Since</span><b>3 March, 2023</b></p>
                    </div>
                    {/* Shipping  */}
                    <div className='shipping'>
                        <p className='title'>Shipping Address</p>
                        <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                        <div className='status'>
                            <div>
                                <p>150</p>
                                <p>Total Order</p>
                            </div>
                            <div>
                                <p>140</p>
                                <p>Completed</p>
                            </div>
                            <div>
                                <p>10</p>
                                <p>Canceled</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Table Filter  */}
                <div className="table-filter">
                    <ul>
                        <li className='active'>All Orders</li>
                        <li>Completed</li>
                        <li>Canceled</li>
                    </ul>
                </div>
            </div>
            {/* Customer Table Section  */}
            <div className="customer-table">
                <div className="table-wrapper">
                    {/* Table Section  */}
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CUSTOMER</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>METHOD</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>#{data.id}</td>
                                        <td>{data.customer}</td>
                                        <td>{data.date}</td>
                                        <td>{data.total}</td>
                                        <td>{data.method}</td>
                                        <td className={data.status}>{data.status}</td>
                                        <td>
                                            <a href={data.action}>View Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* Pagination  */}
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item' onClick={() => prevPage()}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 4L6 8L10 12" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                            {numbers.map((n, i) => {
                                return (
                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i} onClick={() => changeCurrentPage(n)}>
                                        {n}
                                    </li>
                                )
                            })}
                            <li className='page-item' onClick={() => nextPage()}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 4L10 8L6 12" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Dashboard