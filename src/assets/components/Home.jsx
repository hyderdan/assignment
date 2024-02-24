import "./styles/Home.css";
import "./styles/Container.css"
import "./styles/Containersub.css"
import "./styles/Container-sub3.css"
import "./styles/container-detailsub2.css"
import "./styles/container-sub4.css";
import "./styles/Related-deals.css";
import "./styles/Sign-up.css";
import "./styles/Footer.css";
import { CiSearch } from "react-icons/ci";
import { GoVerified } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";


import { CiTrophy } from "react-icons/ci";







const Home=()=>{
        return(
            <div className="main-container">
                <div className="nav">
                    <h4><CiSearch /></h4> <input type="text" placeholder="search..." />
                    <ul>
                     <li>Categories</li>
                     <li>Website Builder</li>
                     <li>Today's deals</li>   
                    </ul>
                </div>
                <div className="container">
                    
                <h1>Best Website builders in the US</h1>
                <div className="container-detail">
                <div className="detail-list">
                   <ul>
                    <li><GoVerified /></li>
                    <li>Last updated -</li>
                    <li>February 22, 2020</li>
                    <li><IoMdInformationCircleOutline /></li>
                    <li>Advertising Disclosure</li>
                    </ul> 
                </div>
                <div className="detail-list2">
                    <ul>
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                    </ul>
                </div>
                <div className="detail-list3">
                    <ul>
                    <li>Home</li>
                    <li> <FaGreaterThan /></li>
                    <li>Hosting for all</li>
                    <li><FaGreaterThan /></li>
                    <li>Hosting</li>
                    <li><FaGreaterThan /></li>
                    <li>Hosting6</li>
                    <li><FaGreaterThan /></li>
                    <li>Hosting5</li>
                    </ul>
                </div>
                <div className="container-detailsub">
                    <h2>1</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
                <div className="detailsub-choice"><p><CiTrophy /> Best Choice</p></div>
                <div className="detailsub-text">
                <p><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool,
                         Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                         <h4>Main highlights</h4>
                         <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
                             an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                             <p className="show-more" >Show more <MdKeyboardArrowDown /></p>
                </div>
                <div className="detailsub-rating">
                        <h3>9.8</h3>
                        <p>Exceptional</p><br />
                        <p className="star"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
                    </div> 
                    <button className="rating-button">view</button>  
                </div>
                <div className="container-detailsub2">
                    <h2>2</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
                <div className="detailsub-choice2"><p><CiTrophy /> Best Choice</p></div>
                <div className="detailsub-text2">
                <p><b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site Creation Toolkit,
                     Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                         <h4>Main highlights</h4>
                         <p>[What You Get]: Gain access to the SiteCraft design studio,
                             featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                             <p className="show-more" >Show more <MdKeyboardArrowDown /></p>
                </div>
                <div className="detailsub-rating2">
                        <h3>9.5</h3>
                        <p>Exceptional</p><br />
                        <p className="star2"><CiStar /><CiStar /><CiStar /><CiStar /></p>
                    </div> 
                    <button className="rating-button2">view</button>  
                </div>
                <div className="container-detailsub3">
                    <h2>3</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
                <div className="detailsub-choice3"><p><CiTrophy /> Best Choice</p></div>
                <div className="detailsub-text3">
                <p><b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool,
                     Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                         <h4>Main highlights</h4>
                         <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates,
                             an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                             <p className="show-more" >Show more <MdKeyboardArrowDown /></p>

                </div>
                <div className="detailsub-rating2">
                        <h3>9.5</h3>
                        <p>Exceptional</p><br />
                        <p className="star2"><CiStar /><CiStar /><CiStar /><CiStar /></p>
                    </div> 
                    <button className="rating-button2">view</button>  
                </div>
                <div className="container-detailsub3">
                    <h2>4</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
                <div className="detailsub-choice3"><p><CiTrophy /> Best Choice</p></div>
                <div className="detailsub-text3">
                <p><b>CDK Resposive Builder:</b>An extensive library of widgets and apps,
                 and detailed step-by-step guides</p>
                         <h4>Main highlights</h4>
                         <div className="text3-sub">
                         <p> <b className="text3-subb">9.9</b>  building responsive  </p>
                        <p><b className="text3-subb">8.9</b> Cool </p>
                        <p> <b className="text3-subb">8.9</b> Docs </p>
                         </div>
                         <div className="text3-sub2">
                            <p>Why we love it</p>
                            <p><b className="text3-sub2b"><RiVerifiedBadgeFill /></b>Documentation</p>
                            <p><b className="text3-sub2b" ><RiVerifiedBadgeFill /></b>Easy Use</p>
                            <p><b className="text3-sub2b" ><RiVerifiedBadgeFill /></b>Out of box</p>
                         </div>
                             <p className="show-more" >Show more <MdKeyboardArrowDown /></p>

                </div>


                <div className="detailsub-rating3">
                        <h3>9.1</h3>
                        <p>Exceptional</p><br />
                        <p className="star3"><CiStar /><CiStar /><CiStar /><CiStar /></p>
                    </div> 
                    <button className="rating-button3">view</button>  
                </div>
                     <h2 className="related-dealheading">Related deals you might like for</h2> 
                <div className="related-deals">
                    
                    <div className="deal-1">
            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
            <p className="deal-1p">20% Off</p><h4 >Limited time </h4>
                    <h3>Webbuilder 1</h3>
                    <p className="deal-1des">Computer  Modern clasic with wix <br /> support</p>
                    <h2>$39.96</h2><p className="deal-priceoff">$49.96</p><p className="price-off20">(20% Off)</p>
                    <button>view deal</button>
            </div>
            <div className="deal-1">
            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
            <p className="deal-1p">20% Off</p><h4 >Limited time </h4>
                    <h3>Webbuilder 1</h3>
                    <p className="deal-1des">Computer  Modern clasic with wix <br /> support</p>
                    <h2>$39.96</h2><p className="deal-priceoff">$49.96</p><p className="price-off20">(20% Off)</p>
                    <button>view deal</button>
            </div>
            <div className="deal-1">
            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
            <p className="deal-1p">20% Off</p><h4 >Limited time </h4>
                    <h3>Webbuilder 1</h3>
                    <p className="deal-1des">Computer  Modern clasic with wix <br /> support</p>
                    <h2>$39.96</h2><p className="deal-priceoff">$49.96</p><p className="price-off20">(20% Off)</p>
                    <button>view deal</button>
            </div>
                </div>

                <div className="sign-up">
                    <h2>Sign up and get exclusive <br /> special deals</h2>

                    <input type="text" /><button>Sign Up</button>
                </div>
            
            </div>
            </div>
                <div className="footer">
                <div className="footer-list1">
                        <ul>
                            <li><b>Categories</b></li>
                            <li>Web Builder</li>
                            <li>Hosting</li>
                            <li>Data Center</li>
                            <li>Robotic-Automation</li>
                        </ul>

                    </div>
                    <div className="footer-list2">
                        <ul>
                            <li><b>Contact</b></li>
                            <li>Contact</li>
                            <li>Terms Of Service</li>
                            <li>Categories</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <h4>United States<MdKeyboardArrowDown /></h4>

                </div>
                    
            </div>
        )
}
export default Home;