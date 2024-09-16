import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faBloggerB,
} from "@fortawesome/free-brands-svg-icons";
import Headline from "./sections/headline";
import SocialIcons from "./components/socialicons";
import Button from "./components/button";
import Services from "./sections/services";

export default function App() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      {/* Main content */}
      <div className="z-0">
        <section>
          <Headline />
        </section>
        <section>
          <Services />
        </section>
        {/* Add other sections here */}
      </div>

      {/* Overlay Left sidebar */}
      <div className="flex py-10 flex-col justify-between fixed top-0 left-0 h-full w-20 bg-opacity-50 backdrop-blur-sm z-50 border-r-2 border-black">
        <FontAwesomeIcon icon={faBloggerB} className="text-gray-500 text-5xl" />
        {/* Social Icons */}
        <div className="flex flex-col justify-center gap-4">
          <SocialIcons link="https://x.com/">
            <FontAwesomeIcon icon={faXTwitter} />
          </SocialIcons>
          <SocialIcons link="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialIcons>
          <SocialIcons link="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcons>
        </div>
      </div>

      {/* Overlay Right Sidebar */}
      <div className="flex flex-col justify-between fixed top-10 right-20 h-full w-fit bg-transparent bg-opacity-50 z-50">
        <Button
          text="START A PROJECT"
          textColor="text-white"
          bgColor="bg-orange-600"
          hoverColor="hover:bg-black"
          borderColor="border-transparent"
        />
      </div>
    </div>
  );
}
