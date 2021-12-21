import React from "react";
import Cable from "./Dropwire"; //"react-dropwire";
import { UAParser } from "ua-parser-js";
import TwitterTweetEmbed from "./TwitterTweetEmbed";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari")
    };
    this.pcr = React.createRef();
    this.walter = React.createRef();
    this.polio = React.createRef();
    this.claims = React.createRef();
    this.jury = React.createRef();
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    clearTimeout(this.check);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/polio") {
          //window.scroll(0, this.polio.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    const buttonStyle = {
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "15px",
      padding: "15px",
      margin: "10px"
    };
    return (
      <div
        style={{
          fontFamily: "'Noto Sans Display', sans-serif"
        }}
      >
        <h1>30 days & under 5 units/stores</h1>
        you can slavery-by-proxy, for your intent to use it is plausible
        <TwitterTweetEmbed
          key="1421471623136358405"
          tweetId="1421471623136358405"
        />
        <h2>Ban rent-seeking to see some magic happen!</h2>
        <a href="https://nextdoor.com/embed/yJhWyXgPTdNG">open poll</a>
        <Cable
          style={{
            width: "440px",
            maxWidth: "100%",
            height: "300px",
            maxHeight: "40vw"
          }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://nextdoor.com/embed/yJhWyXgPTdNG"
          }
          float="left"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 49]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://bankingisnot.biz">practical economics</a>
        <br />
        If the impossibility is&nbsp;
        <a href="https://vaults.biz">un</a>forseeable, it's intent to harm
        <br />
        <br />
        rent-caps can be in quantity - by price is not helpful
        <br />
        <br />
        <a href="https://micro-theory.com">micro-theory.com</a>
        <br />
        <br />
        rent occurs in serfdom, communism-quota/force,
        communism-prisoners'-dilemma/duress, extortion
        <br />
        <br />
        <a href="https://3under2.us">3under2.us</a>&nbsp;-&nbsp;
        <a href="https://saverparty.xyz">saverparty.xyz</a>&nbsp;-&nbsp;
        <a href="https://vaults.biz">vaults.biz</a>
        <br />
        <br />
        . @NJMIns “great insurance” is a lie, the labor*resource Supply exists,
        you are just competing-with-customers w prisoners’-dilemma-duress and
        invoice-counterfeit @paulkrugman heat rises - Vaultsbiz @vaultbiz
        <br />
        <br />
        @GEICO people would save MORE money by not doing insurance than&nbsp;
        <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
          bundling home & auto
        </a>
        &nbsp;we don't need it and it is not smart like not spending on
        expensive throw pillows
        <br />
        <br />
        The&nbsp;
        <a href="https://www.zippia.com/landlord-jobs/demographics/">tenants</a>
        &nbsp;of&nbsp;
        <a href="https://files.consumerfinance.gov/f/documents/cfpb_2019-mortgage-market-activity-trends_report.pdf">
          white supremacy banksquatting (page 6)
        </a>
        &nbsp;
        <a href="https://usafacts.org/articles/homeownership-rates-by-race/">
          among-race
        </a>
        &nbsp;froth.app @frothanalysis
        <br />
        <br />
        The new slaves @saverparty @SenBooker baby-bonds (fentanyl-money)
        @vaultbiz @cvspharmacy froth.app @frothanalysis
        <br />
        <br />
        <a href="http://nationalsecuritycasino.com">
          http://nationalsecuritycasino.com
        </a>
        <br />
        <br />
        Trade settles at a current price, not a higher-price, of the least
        frugal supply and demand, of whom intermediate-supply is demand
        <h2>or any other forms of prohibiting trade</h2>
        <br />
        <br />
        <a href="https://www.researchgate.net/publication/350960231_Storyline_experiment_for_BankingIsNotBiz">
          Here
        </a>
        &nbsp;I begin my work on the book I promised I would write. As I usually
        do with large projects, I write as much as I can and reorganize later.
        My investigations vary-from day-to-day, and the problem I am addressing
        is multi-faceted requiring synchronous solutions in govtech, fintech,
        infotech, edtech and of-course legal-action to support a variety of
        Class-action-suits for the consumers and intermediate-good consumers of
        non-financial industries who based on accrual own 1/44 of all the assets
        on earth but make up 2% of the national-payroll; inventors and artists
        bygone is mercy for thy.
      </div>
    );
  }
}
