import { IconType } from "react-icons";

import {
    HiArrowUpRight,
    HiOutlineLink,
    HiArrowTopRightOnSquare,
    HiEnvelope,
    HiCalendarDays,
    HiArrowRight,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineDocument,
    HiOutlineGlobeAsiaAustralia,
    HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
    PiHouseDuotone,
    PiUserCircleDuotone,
    PiGridFourDuotone,
    PiBookBookmarkDuotone,
    PiImageDuotone,
} from "react-icons/pi";

import {
    SiJavascript,
    SiNextdotjs,
    SiFigma,
    SiSupabase,
    SiFreelancer,
    SiPython,
    SiTypescript,
    SiRust,
    SiPulumi,
    SiTerraform,
    SiNpm,
} from "react-icons/si";

import {
    FaDiscord,
    FaGithub,
    FaLinkedin,
    FaX,
    FaThreads,
    FaXTwitter,
    FaFacebook,
    FaPinterest,
    FaWhatsapp,
    FaReddit,
    FaTelegram,
    FaAws,
} from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { DiGoogleCloudPlatform } from "react-icons/di";

export const iconLibrary: Record<string, IconType> = {
    arrowUpRight: HiArrowUpRight,
    arrowRight: HiArrowRight,
    email: HiEnvelope,
    globe: HiOutlineGlobeAsiaAustralia,
    person: PiUserCircleDuotone,
    grid: PiGridFourDuotone,
    book: PiBookBookmarkDuotone,
    openLink: HiOutlineLink,
    calendar: HiCalendarDays,
    home: PiHouseDuotone,
    gallery: PiImageDuotone,
    discord: FaDiscord,
    eye: HiOutlineEye,
    eyeOff: HiOutlineEyeSlash,
    github: FaGithub,
    linkedin: FaLinkedin,
    x: FaX,
    twitter: FaXTwitter,
    threads: FaThreads,
    arrowUpRightFromSquare: HiArrowTopRightOnSquare,
    document: HiOutlineDocument,
    rocket: HiOutlineRocketLaunch,
    javascript: SiJavascript,
    nextjs: SiNextdotjs,
    supabase: SiSupabase,
    figma: SiFigma,
    facebook: FaFacebook,
    pinterest: FaPinterest,
    whatsapp: FaWhatsapp,
    reddit: FaReddit,
    telegram: FaTelegram,
    freelancer: SiFreelancer,
    python: SiPython,
    typescript: SiTypescript,
    rust: SiRust,
    azure: VscAzure,
    aws: FaAws,
    gcp: DiGoogleCloudPlatform,
    pulumi: SiPulumi,
    terraform: SiTerraform,
    npm: SiNpm,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
