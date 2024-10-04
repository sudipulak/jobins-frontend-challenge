import { useState, useRef } from 'react'
// Mock Data 
import mockData from '@/MOCK_DATA.json'
// Assets Import 
import totalSalesImage from '@/assets/business-and-finance.png'
import totalProfitImage from '@/assets/yen.png'
import USflag from '@/assets/us.png'
import Brazilflag from '@/assets/brazil.png'
import Australiaflag from '@/assets/australia.png'


const Dashboard = () => {
    const [filteredData, setFilterdData] = useState(mockData);

    // Sorting 
    // status filter 
    const statusRef = useRef();
    const statusChanged = () => {
        let selectedValue = statusRef.current.value;
        let newData = mockData.filter((data) => data.status === selectedValue)
        if (selectedValue === 'All') {
            setFilterdData(mockData);
        } else {
            setFilterdData(newData);
        }
    }

    // tab status filter 
    const [activeAll, setActiveAll] = useState(true);
    const [activeComplete, setActiveComplete] = useState(false);
    const [activeCancel, setActiveCancel] = useState(false);
    const tabStatusChanged = (selectedValue) => {
        let newData = mockData.filter((data) => data.status === selectedValue)
        if (selectedValue === 'All') {
            setFilterdData(mockData);
            setActiveAll(true);
            setActiveComplete(false);
            setActiveCancel(false);
        }
        if (selectedValue === 'Completed') {
            setFilterdData(newData);
            setActiveAll(false);
            setActiveComplete(true);
            setActiveCancel(false);
        }
        if (selectedValue === 'Canceled') {
            setFilterdData(newData);
            setActiveAll(false);
            setActiveComplete(false);
            setActiveCancel(true);
        }
    }

    // search filter 
    const searchRef = useRef();
    const searchFilterHandle = () => {
        let searchTerm = searchRef.current.value;
        let newData = mockData.filter((data) => data.customer.toLowerCase().includes(searchTerm.toLowerCase()));
        if (searchTerm !== '') {
            setFilterdData(newData);
        } else {
            setFilterdData(mockData);
        }
    }

    // Date Filter 
    const dateRef = useRef();
    const dateFilterHandle = () => {
        let sortBy = dateRef.current.value
        if (sortBy === 'asc') {
            const ascData = mockData.sort((a, b) => new Date(a.date) - new Date(b.date));
            const sortedData = ascData.filter(data => data);
            setFilterdData(sortedData);
        }
        else if (sortBy === 'des') {
            const desData = mockData.sort((a, b) => new Date(b.date) - new Date(a.date));
            const sortedData = desData.filter(data => data);
            setFilterdData(sortedData);
        }
    }


    // Entries 
    const entriesRef = useRef();
    const entriesChanged = () => {
        setRecordsPerPage(entriesRef.current.value);
    }

    // Pagination variables 
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const datas = filteredData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
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
                        <li className={activeAll ? 'active' : ''} onClick={() => tabStatusChanged('All')}>All Orders</li>
                        <li className={activeComplete ? 'active' : ''} onClick={() => tabStatusChanged("Completed")}>Completed</li>
                        <li className={activeCancel ? 'active' : ''} onClick={() => tabStatusChanged("Canceled")}>Canceled</li>
                    </ul>
                </div>
            </div>
            {/* Customer Table Section  */}
            <div className="customer-table">
                <div className="table-sort-filter">
                    <div>
                        <select name="status" ref={statusRef} onChange={() => statusChanged()}>
                            <option value="All">Status : All</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                        <div className="search-filter">
                            <input type="text" placeholder='Search...' ref={searchRef} onChange={() => searchFilterHandle()} />
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.87495 1.5C6.85839 1.50009 5.85659 1.74327 4.95314 2.20927C4.04968 2.67527 3.27077 3.35056 2.68137 4.17882C2.09198 5.00707 1.7092 5.96426 1.56498 6.97053C1.42075 7.97681 1.51926 9.00298 1.85228 9.96344C2.1853 10.9239 2.74318 11.7908 3.47937 12.4918C4.21557 13.1928 5.10872 13.7076 6.08433 13.9932C7.05994 14.2788 8.0897 14.327 9.08771 14.1337C10.0857 13.9404 11.023 13.5112 11.8214 12.882L14.5604 15.621C14.7019 15.7576 14.8913 15.8332 15.088 15.8315C15.2846 15.8298 15.4728 15.7509 15.6118 15.6119C15.7509 15.4728 15.8297 15.2847 15.8315 15.0881C15.8332 14.8914 15.7576 14.702 15.6209 14.5605L12.8819 11.8215C13.6229 10.8815 14.0843 9.7518 14.2133 8.56179C14.3422 7.37179 14.1335 6.16952 13.6111 5.09257C13.0887 4.01562 12.2736 3.10752 11.2592 2.47217C10.2447 1.83683 9.07192 1.49992 7.87495 1.5ZM2.99995 7.875C2.99995 6.58207 3.51356 5.34209 4.4278 4.42785C5.34204 3.51361 6.58202 3 7.87495 3C9.16788 3 10.4079 3.51361 11.3221 4.42785C12.2363 5.34209 12.7499 6.58207 12.7499 7.875C12.7499 9.16793 12.2363 10.4079 11.3221 11.3221C10.4079 12.2364 9.16788 12.75 7.87495 12.75C6.58202 12.75 5.34204 12.2364 4.4278 11.3221C3.51356 10.4079 2.99995 9.16793 2.99995 7.875Z" fill="#8B909A" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <select name="Date Filter" defaultValue='none' ref={dateRef} onChange={() => dateFilterHandle()}>
                            <option value='none' disabled>Filter by date range</option>
                            <option value="asc">Ascending</option>
                            <option value="des">descending</option>
                        </select>
                    </div>
                </div>
                {/* Main Table Content  */}
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
                                        <td className={data.status.toLowerCase()}>{data.status}</td>
                                        <td>
                                            <a href={data.action}>View Details</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* Table Footer  */}
                    <div className="table-footer">
                        {/* Entries  */}
                        <div className="entries">
                            <p>Showing</p>
                            <select name="entries" ref={entriesRef} onChange={() => entriesChanged()}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                            of {filteredData.length}
                        </div>
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
            </div>
        </section >
    )
}

export default Dashboard