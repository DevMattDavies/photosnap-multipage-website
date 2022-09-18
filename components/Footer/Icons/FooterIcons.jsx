const facebookIcon = "/assets/shared/desktop/facebook.svg";
const youtubeIcon = "/assets/shared/desktop/youtube.svg";
const twitterIcon = "/assets/shared/desktop/twitter.svg";
const pinterestIcon = "/assets/shared/desktop/pinterest.svg";
const instagramIcon = "/assets/shared/desktop/instagram.svg";

const Icons = [
  facebookIcon,
  youtubeIcon,
  twitterIcon,
  pinterestIcon,
  instagramIcon,
];

export default function footerIcons() {
  return Icons.map((icon, key) => {
    return <img key={key} src={icon} alt="social icon"></img>;
  });
}
