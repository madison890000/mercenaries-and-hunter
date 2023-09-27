import {LocalesKey} from "../i18n/languages";


export const SCREEN_SHOT_IMAGES_WITH_LOCALE = {
    linkedin: {
        'ja-JP': '/imgs/linkedin-ja-JP.png',
        default: "/imgs/linkedin.png",
    },
    upwork: {
        'ja-JP': '/imgs/upwork-ja-JP.png',
        default: "/imgs/upwork.png",
    },
    freelancer: {
        'ja-JP': '/imgs/freelancer-ja-JP.png',
        default: "/imgs/freelancer.png",
    },
    web3Career: {
        default: "/imgs/web3.png",
    }
} as unknown as {
    linkedin: Record<LocalesKey | 'default', string>
    upwork: Record<LocalesKey | 'default', string>
    freelancer: Record<LocalesKey | 'default', string>
    web3Career: Record<LocalesKey | 'default', string>
};

export const HELP_IMAGES = {
    defaultExtensionHome: '/imgs/help-1.png',
    defaultExtensionPopup: '/imgs/help-2.png',
    markSiteInExtensionPopup: '/imgs/help-3.png',
    appliedListButtonInExtensionPopup: '/imgs/help-4.png',
    appliedListInWeb: '/imgs/help-5.png',
}