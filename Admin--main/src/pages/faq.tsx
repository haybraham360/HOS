import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from '/images/logo.png';
import line from '/images/line.png';
import search from '/icons/search.png';
import dropdown_icon from '/icons/dropdown_icon.png';
import contactus_image from '/images/contactus_image.png';

export const Faq = () => {
    const [openone, setOpenone] = useState<boolean>(false);
    const [opentwo, setOpentwo] = useState<boolean>(false);
    const [openthree, setOpenthree] = useState<boolean>(false);
    const [openfour, setOpenfour] = useState<boolean>(false);
    const [openfive, setOpenfive] = useState<boolean>(false);
    const [opensix, setOpensix] = useState<boolean>(false);
    const [openseven, setOpenseven] = useState<boolean>(false);
    const [openeight, setOpeneight] = useState<boolean>(false);
    const [opennine, setOpennine] = useState<boolean>(false);
    const [openten, setOpenten] = useState<boolean>(false);
    const [openeleven, setOpeneleven] = useState<boolean>(false);
    const [opentwelve, setOpentwelve] = useState<boolean>(false);
    const [openthirteen, setOpenthirteen] = useState<boolean>(false);
    const [openfourteen, setOpenfourteen] = useState<boolean>(false);
    const [openfifteen, setOpenfifteen] = useState<boolean>(false);
    const [opensixteen, setOpensixteen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownReftwo = useRef<HTMLDivElement>(null)

    const handleDropDownFocus1=(state: boolean) => {
        setOpenone(!state);
    };

    const handleDropDownFocus2=(state: boolean) => {
        setOpentwo(!state);
    };

    const handleDropDownFocus3=(state: boolean) => {
        setOpenthree(!state);
    };

    const handleDropDownFocus4=(state: boolean) => {
        setOpenfour(!state);
    };

    const handleDropDownFocus5=(state: boolean) => {
        setOpenfive(!state);
    };

    const handleDropDownFocus6=(state: boolean) => {
        setOpensix(!state);
    };

    const handleDropDownFocus7=(state: boolean) => {
        setOpenseven(!state);
    };

    const handleDropDownFocus8=(state: boolean) => {
        setOpeneight(!state);
    };

    const handleDropDownFocus9=(state: boolean) => {
        setOpennine(!state);
    };

    const handleDropDownFocus10=(state: boolean) => {
        setOpenten(!state);
    };

    const handleDropDownFocus11=(state: boolean) => {
        setOpeneleven(!state);
    };

    const handleDropDownFocus12=(state: boolean) => {
        setOpentwelve(!state);
    };

    const handleDropDownFocus13=(state: boolean) => {
        setOpenthirteen(!state);
    };

    const handleDropDownFocus14=(state: boolean) => {
        setOpenfourteen(!state);
    };

    const handleDropDownFocus15=(state: boolean) => {
        setOpenfifteen(!state);
    };

    const handleDropDownFocus16=(state: boolean) => {
        setOpensixteen(!state);
    };

    const handleClickOutsideDropdown =(e:any)=>{
        if(openone && !dropdownRef.current?. contains(e.target as Node)){
          setOpenone(false)
        }
      }
    
    window.addEventListener("click",handleClickOutsideDropdown)

    return (
        <div className="faq">
            <div>
                <img src={contactus_image} alt="" className="faq-image" />
                <h2 className="title">Frequently Asked Questions (FAQ’s)</h2>
                <div className="dark-layer"></div>
            </div>
            <div className="nav-logo">
            <Link to="/"> <img src={logo} alt="image"/> </Link>
            </div>

            <div>
            <input type="text" className="searchinput" placeholder="Search FAQs"/>
            <a className="searchicon"> <img src={search} width='15px' height="15px" /> </a>
            </div>

            <div>
            <div className="categorybuttongroup">
            <button className="categorybutton">General, Hours of Service (HOS)</button>
            <button className="categorybutton2">Truck Accidents</button>
            <button className="categorybutton2">FMCSA</button>
            <button className="categorybutton2">CDL</button>
            <button className="categorybutton2">ELD</button>
            <button className="categorybutton2">Truck Driver</button>
            <button className="categorybutton2">Driver Logs</button>
            </div>
            </div>

          <div>
            <div className="faq-group">
            <div ref={dropdownRef}>
            <img onClick={_e=>handleDropDownFocus1(openone)} src={dropdown_icon} alt="" className="dropdown-icon" />
            <button onClick={_e=>handleDropDownFocus1(openone)} className="faq-question-button">FAQ Question</button>
            { openone && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus2(opentwo)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus2(opentwo)} className="faq-question-button">FAQ Question</button>
            { opentwo && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus3(openthree)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus3(openthree)} className="faq-question-button">FAQ Question</button>
            { openthree && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus4(openfour)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus4(openfour)} className="faq-question-button">FAQ Question</button>
            { openfour && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus5(openfive)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus5(openfive)} className="faq-question-button">FAQ Question</button>
            { openfive && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus6(opensix)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus6(opensix)} className="faq-question-button">FAQ Question</button>
            { opensix && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus7(openseven)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus7(openseven)} className="faq-question-button">FAQ Question</button>
            { openseven && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus8(openeight)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus8(openeight)} className="faq-question-button">FAQ Question</button>
            { openeight && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            </div>

            <div className="faq-group2">
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus9(opennine)} src={dropdown_icon} alt="" className="dropdown-icon" />
            <button onClick={_e=>handleDropDownFocus9(opennine)} className="faq-question-button">FAQ Question</button>
            { opennine && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus10(openten)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus10(openten)} className="faq-question-button">FAQ Question</button>
            { openten && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus11(openeleven)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus11(openeleven)} className="faq-question-button">FAQ Question</button>
            { openeleven && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus12(opentwelve)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus12(opentwelve)} className="faq-question-button">FAQ Question</button>
            { opentwelve && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus13(openthirteen)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus13(openthirteen)} className="faq-question-button">FAQ Question</button>
            { openthirteen && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus14(openfourteen)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus14(openfourteen)} className="faq-question-button">FAQ Question</button>
            { openfourteen && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus15(openfifteen)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus15(openfifteen)} className="faq-question-button">FAQ Question</button>
            { openfifteen && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            <div ref={dropdownReftwo}>
            <img onClick={_e=>handleDropDownFocus16(opensixteen)} src={dropdown_icon} alt="" className="dropdown-icon2" />
            <button onClick={_e=>handleDropDownFocus16(opensixteen)} className="faq-question-button">FAQ Question</button>
            { opensixteen && (
                <dl className="question-dropdown-frame">
                    <img src={line} alt="" className="line" />
                    <p className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text<br/>ever since the 1500s,
                    when an unknown printer took a galley of type<br/>and scrambled it to make a type.
                    Lorem Ipsum is simply dummy text<br/>of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an<br/>unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </dl>
            )}
            </div>
            </div>
          </div>
        </div>
    )
}