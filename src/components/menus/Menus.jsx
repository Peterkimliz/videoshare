import "./Menus.css";
import LogoImage from "../../images/logo.png";
import {
  HomeIcon,
  ExploreOutlinedIcon,
  SubscriptionsOutlinedIcon,
  VideoLibraryOutlinedIcon,
  HistoryOutlinedIcon,
  LibraryMusicOutlinedIcon,
  SportsEsportsOutlinedIcon,
  SportsBasketballOutlinedIcon,
  MovieOutlinedIcon,
  ArticleOutlinedIcon,
  LiveTvOutlinedIcon,
  AccountCircleOutlinedIcon,
  SettingsOutlinedIcon,
  FlagOutlinedIcon,
  HelpOutlineOutlinedIcon,
  SettingsBrightnessOutlinedIcon,
} from "@mui/icons-material";
const Menus = () => {
  return (
    <div className="menus">
      <div className=" wrapper">
        {/* logo */}
        <div className=" logo">
          <img src={LogoImage} alt="" style={{ height: "25px" }} />
          <p>VideoShare</p>
        </div>
        {/* items */}
        <div className="items">
          <HomeIcon/>
          Home</div>
        <div  className="items">
          <ExploreOutlinedIcon />
          Explore
        </div>
        <div className="items">
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </div>
        <Hr />
        <div className="items">
          <VideoLibraryOutlinedIcon />
          Library
        </div>
        <div className="items">
          <HistoryOutlinedIcon />
          History
        </div>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <div className="items">
          <LibraryMusicOutlinedIcon />
          Music
        </div>
        <div className="items">
          <SportsBasketballOutlinedIcon />
          Sports
        </div>
        <div className="items">
          <SportsEsportsOutlinedIcon />
          Gaming
        </div>
        <div className="items">
          <MovieOutlinedIcon />
          Movies
        </div>
        <div className="items">
          <ArticleOutlinedIcon />
          News
        </div>
        <div className="items">
          <LiveTvOutlinedIcon />
          Live
        </div>
        <Hr />
        <div className="items">
          <SettingsOutlinedIcon />
          Settings
        </div>
        <div className="items">
          <FlagOutlinedIcon />
          Report
        </div>
        <div className="items">
          <HelpOutlineOutlinedIcon />
          Help
        </div >
        <div  className="items" >
          <SettingsBrightnessOutlinedIcon />
          Mode
        </div>
          
      </div>
    </div>
  );
};

export default Menus;
