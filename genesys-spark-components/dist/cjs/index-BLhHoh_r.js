'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

const NAMESPACE = 'genesys-webcomponents';
const BUILD = /* genesys-webcomponents */ { hydratedSelectorName: "hydrated", lazyLoad: true, slotRelocation: true, updatable: true};

const globalScripts = () => {};
const globalStyles = ":root{--gse-core-spacing-5xs:2px;--gse-core-spacing-4xs:4px;--gse-core-spacing-3xs:8px;--gse-core-spacing-2xs:12px;--gse-core-spacing-xs:16px;--gse-core-spacing-sm:20px;--gse-core-spacing-md:24px;--gse-core-spacing-lg:32px;--gse-core-spacing-xl:40px;--gse-core-spacing-2xl:48px;--gse-core-spacing-6xs:1px;--gse-core-zIndex-0:0;--gse-core-zIndex-1:1;--gse-core-zIndex-100:100;--gse-core-zIndex-200:200;--gse-core-zIndex-300:300;--gse-core-zIndex-400:400;--gse-core-zIndex-500:500;--gse-core-zIndex-600:600;--gse-core-borderRadius-none:0;--gse-core-borderRadius-xs:2px;--gse-core-borderRadius-sm:4px;--gse-core-borderRadius-md:8px;--gse-core-borderRadius-lg:16px;--gse-core-borderRadius-xl:20px;--gse-core-borderRadius-full:100%;--gse-core-color-white:#ffffff;--gse-core-color-black:#000000;--gse-core-color-transparent:rgba(0, 0, 0, 0);--gse-core-color-mineral-100:#ddeaf7;--gse-core-color-mineral-200:#cde0f4;--gse-core-color-mineral-300:#bcd6f0;--gse-core-color-mineral-400:#9ac1e8;--gse-core-color-mineral-500:#79ade1;--gse-core-color-mineral-600:#5798d9;--gse-core-color-mineral-700:#467aae;--gse-core-color-mineral-800:#345b82;--gse-core-color-mineral-900:#233d57;--gse-core-color-mineral-1000:#1a2e41;--gse-core-color-plum-100:#eee3ff;--gse-core-color-plum-200:#e6d6ff;--gse-core-color-plum-300:#dec8ff;--gse-core-color-plum-400:#cdacff;--gse-core-color-plum-500:#bd91ff;--gse-core-color-plum-600:#ac75ff;--gse-core-color-plum-700:#8a5ecc;--gse-core-color-plum-800:#674699;--gse-core-color-plum-900:#452f66;--gse-core-color-plum-950:#34234d;--gse-core-color-plum-1000:#282136;--gse-core-color-raspberry-100:#fadff5;--gse-core-color-raspberry-200:#f7cff0;--gse-core-color-raspberry-300:#f5bfeb;--gse-core-color-raspberry-400:#ef9ee1;--gse-core-color-raspberry-500:#ea7ed7;--gse-core-color-raspberry-600:#e55ecd;--gse-core-color-raspberry-700:#b74ba4;--gse-core-color-raspberry-800:#89387b;--gse-core-color-raspberry-900:#5c2652;--gse-core-color-raspberry-1000:#451c3e;--gse-core-color-coral-100:#ffdee4;--gse-core-color-coral-200:#ffced6;--gse-core-color-coral-300:#ffbec9;--gse-core-color-coral-400:#ff9dad;--gse-core-color-coral-500:#ff7d92;--gse-core-color-coral-600:#ff5c77;--gse-core-color-coral-700:#cc4a5f;--gse-core-color-coral-800:#993747;--gse-core-color-coral-900:#662530;--gse-core-color-coral-1000:#4d1c24;--gse-core-color-mango-100:#fff4dc;--gse-core-color-mango-200:#ffeeca;--gse-core-color-mango-300:#ffe8b9;--gse-core-color-mango-400:#ffdd96;--gse-core-color-mango-500:#ffd173;--gse-core-color-mango-600:#ffc650;--gse-core-color-mango-700:#cc9e40;--gse-core-color-mango-800:#997730;--gse-core-color-mango-900:#664f20;--gse-core-color-mango-1000:#4d3b18;--gse-core-color-pear-100:#edf5df;--gse-core-color-pear-200:#e3eecc;--gse-core-color-pear-300:#d9e8bb;--gse-core-color-pear-400:#c6dd98;--gse-core-color-pear-500:#b3d176;--gse-core-color-pear-600:#a0c654;--gse-core-color-pear-700:#809e43;--gse-core-color-pear-800:#607732;--gse-core-color-pear-900:#404f22;--gse-core-color-pear-1000:#303b19;--gse-core-color-jade-100:#dff5f0;--gse-core-color-jade-200:#cceee6;--gse-core-color-jade-300:#bbe8de;--gse-core-color-jade-400:#98ddcd;--gse-core-color-jade-500:#76d1bc;--gse-core-color-jade-600:#54c6ab;--gse-core-color-jade-700:#439e89;--gse-core-color-jade-800:#327767;--gse-core-color-jade-900:#224f45;--gse-core-color-jade-1000:#193b33;--gse-core-color-pepper-100:#f9d3da;--gse-core-color-pepper-200:#f3a7b5;--gse-core-color-pepper-300:#ee7a8f;--gse-core-color-pepper-400:#e84e6a;--gse-core-color-pepper-500:#e22245;--gse-core-color-pepper-600:#b51b37;--gse-core-color-pepper-700:#881429;--gse-core-color-pepper-800:#5a0e1c;--gse-core-color-pepper-900:#440a15;--gse-core-color-pepper-1000:#2d070e;--gse-core-color-honey-100:#fef4d8;--gse-core-color-honey-200:#fce9b2;--gse-core-color-honey-300:#fbdd8b;--gse-core-color-honey-400:#f9d265;--gse-core-color-honey-500:#f8c73e;--gse-core-color-honey-600:#c9a132;--gse-core-color-honey-700:#9a7b25;--gse-core-color-honey-800:#6c5619;--gse-core-color-honey-900:#3d300c;--gse-core-color-honey-1000:#251d06;--gse-core-color-emerald-100:#cef0e6;--gse-core-color-emerald-200:#9de1cd;--gse-core-color-emerald-300:#6bd3b3;--gse-core-color-emerald-400:#3ac49a;--gse-core-color-emerald-500:#09b581;--gse-core-color-emerald-600:#079167;--gse-core-color-emerald-700:#056d4d;--gse-core-color-emerald-800:#044834;--gse-core-color-emerald-900:#033627;--gse-core-color-emerald-1000:#02241a;--gse-core-color-violet-100:#e2dff8;--gse-core-color-violet-200:#c5bef1;--gse-core-color-violet-300:#a89ee9;--gse-core-color-violet-400:#8b7de2;--gse-core-color-violet-500:#6e5ddb;--gse-core-color-violet-600:#594bb2;--gse-core-color-violet-700:#443989;--gse-core-color-violet-800:#2e275f;--gse-core-color-violet-900:#241e4b;--gse-core-color-violet-1000:#191536;--gse-core-color-genesysNavy-50:#f0f1f5;--gse-core-color-genesysNavy-100:#dfe3ec;--gse-core-color-genesysNavy-200:#bfc6d9;--gse-core-color-genesysNavy-300:#9faac6;--gse-core-color-genesysNavy-400:#808db2;--gse-core-color-genesysNavy-500:#596ea6;--gse-core-color-genesysNavy-600:#3d538f;--gse-core-color-genesysNavy-700:#263b73;--gse-core-color-genesysNavy-800:#152550;--gse-core-color-genesysNavy-900:#141c34;--gse-core-color-genesysNavy-950:#141929;--gse-core-color-genesysNavy-1000:#0f1219;--gse-core-color-island-50:#e6f4fa;--gse-core-color-island-100:#cdeaf5;--gse-core-color-island-200:#9fd6ea;--gse-core-color-island-300:#81cbe5;--gse-core-color-island-400:#53bee5;--gse-core-color-island-500:#28afe0;--gse-core-color-island-600:#1589b2;--gse-core-color-island-700:#056385;--gse-core-color-island-800:#04445c;--gse-core-color-island-900:#003447;--gse-core-color-island-950:#002533;--gse-core-color-island-1000:#052a38;--gse-core-color-genesysOrange-50:#ffece8;--gse-core-color-genesysOrange-100:#ffdad1;--gse-core-color-genesysOrange-200:#ffb5a3;--gse-core-color-genesysOrange-300:#ff8f76;--gse-core-color-genesysOrange-400:#ff6a48;--gse-core-color-genesysOrange-500:#ff451a;--gse-core-color-genesysOrange-600:#cc3715;--gse-core-color-genesysOrange-700:#992910;--gse-core-color-genesysOrange-800:#661c0a;--gse-core-color-genesysOrange-900:#4d1508;--gse-core-color-genesysOrange-950:#2f1007;--gse-core-color-genesysOrange-1000:#1a0703;--gse-core-color-azureBlue-50:#eff3ff;--gse-core-color-azureBlue-100:#d5def7;--gse-core-color-azureBlue-200:#adbff0;--gse-core-color-azureBlue-300:#829ce5;--gse-core-color-azureBlue-400:#5476d5;--gse-core-color-azureBlue-500:#2954cb;--gse-core-color-azureBlue-600:#2143a2;--gse-core-color-azureBlue-700:#19327a;--gse-core-color-azureBlue-800:#102251;--gse-core-color-azureBlue-900:#0c193d;--gse-core-color-azureBlue-950:#081129;--gse-core-color-azureBlue-1000:#040814;--gse-core-color-haze-50:#f5f6fa;--gse-core-color-haze-100:#ebedf5;--gse-core-color-haze-150:#dce1ed;--gse-core-color-haze-200:#cad1e1;--gse-core-color-haze-300:#c1c6d4;--gse-core-color-haze-400:#b2b7c4;--gse-core-color-haze-500:#a3a8b5;--gse-core-color-haze-600:#848891;--gse-core-color-haze-700:#6a6d75;--gse-core-color-haze-800:#4f5157;--gse-core-color-haze-850:#3e4044;--gse-core-color-haze-900:#2a2a2e;--gse-core-color-haze-950:#1e1e21;--gse-core-color-haze-1000:#131315;--gse-core-fontFamily-roboto:Roboto;--gse-core-fontFamily-urbanist:Urbanist;--gse-core-fontFamily-notoSans:\"Noto Sans\";--gse-core-fontFamily-notoSansMono:\"Noto Sans Mono\";--gse-core-fontSize-xs:12px;--gse-core-fontSize-2xs:10px;--gse-core-fontSize-sm:14px;--gse-core-fontSize-md:16px;--gse-core-fontSize-lg:18px;--gse-core-fontSize-xl:24px;--gse-core-fontSize-xxl:36px;--gse-core-fontSize-3xl:48px;--gse-core-fontSize-4xl:56px;--gse-core-fontSize-5xl:60px;--gse-core-fontSize-6xl:72px;--gse-core-fontWeight-regular:400;--gse-core-fontWeight-semiBold:600;--gse-core-fontWeight-bold:700;--gse-core-lineHeight-2xs:16px;--gse-core-lineHeight-3xs:14px;--gse-core-lineHeight-xs:18px;--gse-core-lineHeight-sm:20px;--gse-core-lineHeight-md:24px;--gse-core-lineHeight-lg:27px;--gse-core-lineHeight-xl:32px;--gse-core-lineHeight-2xl:44px;--gse-core-lineHeight-3xl:58px;--gse-core-lineHeight-4xl:64px;--gse-core-lineHeight-5xl:72px;--gse-core-lineHeight-6xl:86px;--gse-core-lineHeight-matchFontSize:1;--gse-core-elevation-low:0 0 4px 1px rgba(35, 57, 92, 0.1);--gse-core-elevation-medium:0 0 6px 1px rgba(35, 57, 92, 0.12);--gse-core-elevation-high:0 0 8px 1px rgba(35, 57, 92, 0.15);--gse-core-size-5xs:2px;--gse-core-size-4xs:4px;--gse-core-size-xs:16px;--gse-core-size-sm:20px;--gse-core-size-md:24px;--gse-core-size-lg:32px;--gse-core-size-xl:40px;--gse-core-size-2xl:48px;--gse-core-size-3xl:98px;--gse-core-size-4xl:112px;--gse-core-size-2xs:12px;--gse-core-size-3xs:8px;--gse-core-size-6xs:1px;--gse-core-textDecoration-underline:underline;--gse-core-colorLegacy-blue-10:#172b52;--gse-core-colorLegacy-blue-20:#1c3363;--gse-core-colorLegacy-blue-30:#203b73;--gse-core-colorLegacy-blue-40:#23478f;--gse-core-colorLegacy-blue-50:#2754ac;--gse-core-colorLegacy-blue-60:#2a60c8;--gse-core-colorLegacy-blue-70:#5084e3;--gse-core-colorLegacy-blue-80:#75a8ff;--gse-core-colorLegacy-blue-90:#aac9ff;--gse-core-colorLegacy-blue-100:#deeaff;--gse-core-colorLegacy-black-10:#000000;--gse-core-colorLegacy-black-20:#151d28;--gse-core-colorLegacy-black-30:#202937;--gse-core-colorLegacy-black-40:#283243;--gse-core-colorLegacy-black-50:#2e394c;--gse-core-colorLegacy-black-60:#364154;--gse-core-colorLegacy-black-70:#3e4a5b;--gse-core-colorLegacy-black-80:#4c5667;--gse-core-colorLegacy-black-90:#596373;--gse-core-colorLegacy-black-100:#6b7585;--gse-core-colorLegacy-grey-10:#8a97ad;--gse-core-colorLegacy-grey-20:#99a4b8;--gse-core-colorLegacy-grey-30:#b4bccb;--gse-core-colorLegacy-grey-40:#c8cfda;--gse-core-colorLegacy-grey-50:#d7dce5;--gse-core-colorLegacy-grey-60:#e2e6ee;--gse-core-colorLegacy-grey-70:#e8ecf2;--gse-core-colorLegacy-grey-80:#eff1f5;--gse-core-colorLegacy-grey-90:#f6f7f9;--gse-core-colorLegacy-grey-100:#fdfdfd;--gse-core-colorLegacy-red-10:#520404;--gse-core-colorLegacy-red-20:#700505;--gse-core-colorLegacy-red-30:#8f0707;--gse-core-colorLegacy-red-40:#ad0808;--gse-core-colorLegacy-red-50:#cc0a0a;--gse-core-colorLegacy-red-60:#ea0b0b;--gse-core-colorLegacy-red-70:#ef4343;--gse-core-colorLegacy-red-80:#f37a7a;--gse-core-colorLegacy-red-90:#f8b2b2;--gse-core-colorLegacy-red-100:#fceaea;--gse-core-colorLegacy-green-10:#0d3d00;--gse-core-colorLegacy-green-20:#164b08;--gse-core-colorLegacy-green-30:#205a10;--gse-core-colorLegacy-green-40:#296817;--gse-core-colorLegacy-green-50:#33771f;--gse-core-colorLegacy-green-60:#3c8527;--gse-core-colorLegacy-green-70:#69a358;--gse-core-colorLegacy-green-80:#95c189;--gse-core-colorLegacy-green-90:#c2deb9;--gse-core-colorLegacy-green-100:#eefcea;--gse-core-colorLegacy-yellow-10:#523800;--gse-core-colorLegacy-yellow-20:#755000;--gse-core-colorLegacy-yellow-30:#976700;--gse-core-colorLegacy-yellow-40:#ba7f00;--gse-core-colorLegacy-yellow-50:#dc9600;--gse-core-colorLegacy-yellow-60:#ffae00;--gse-core-colorLegacy-yellow-70:#fbbe3b;--gse-core-colorLegacy-yellow-80:#fcd276;--gse-core-colorLegacy-yellow-90:#fce5b1;--gse-core-colorLegacy-yellow-100:#fdf8ec;--gse-core-colorLegacy-yellow-110:#fff793;--gse-core-colorLegacy-yellow-120:#ffef27;--gse-core-colorLegacy-secondary-yellowGreen:#ddd933;--gse-core-colorLegacy-secondary-oliveGreen:#868c1e;--gse-core-colorLegacy-secondary-aquaGreen:#1da8b3;--gse-core-colorLegacy-secondary-pink:#ff8fdd;--gse-core-colorLegacy-secondary-fuchsia:#cc3ebe;--gse-core-colorLegacy-secondary-lilac:#b5b5eb;--gse-core-colorLegacy-secondary-plum:#5e5782;--gse-core-colorLegacy-secondary-electricPurple:#8452cf;--gse-core-colorLegacy-secondary-genesysBlue:#75a8ff;--gse-core-colorLegacy-secondary-navy:#203b73;--gse-core-colorLegacy-dataVisualization-yellowGreen:#f8f3c6;--gse-core-colorLegacy-dataVisualization-oliveGreen:#dcdbbb;--gse-core-colorLegacy-dataVisualization-aquaGreen:#c7e5e8;--gse-core-colorLegacy-dataVisualization-pink:#ffdff5;--gse-core-colorLegacy-dataVisualization-fuchsia:#f4c9ec;--gse-core-colorLegacy-dataVisualization-lilac:#e9e8f9;--gse-core-colorLegacy-dataVisualization-plum:#cdc9d8;--gse-core-colorLegacy-dataVisualization-electricPurple:#dcc9f2;--gse-core-colorLegacy-dataVisualization-genesysBlue:#d9e4ff;--gse-core-colorLegacy-dataVisualization-navy:#bbbfd4;--gse-core-colorLegacy-brand-brandOrange:#ff4f1f;--gse-core-colorLegacy-brand-brandTeal:#00ae9e;--gse-core-colorLegacy-brand-brandNavy:#23395d;--gse-core-colorLegacy-brand-brandLightBlue:#3b90aa;--gse-core-colorLegacy-brand-brandYellow:#ff8f14;--gse-core-borderWidth-1:1px;--gse-core-borderWidth-2:2px;--gse-core-borderWidth-3:3px;--gse-core-textCase-uppercase:uppercase;--gse-core-opacity-0:0;--gse-core-opacity-50:0.5;--gse-core-opacity-64:0.64;--gse-core-opacity-80:0.8;--gse-core-letterSpacing-1:1px;--gse-semantic-theme-fontFamily-headings:Urbanist;--gse-semantic-theme-fontFamily-body:\"Noto Sans\";--gse-semantic-theme-fontFamily-code-body:\"Noto Sans Mono\";--gse-semantic-theme-background-container-primary-10:#ffffff;--gse-semantic-theme-background-container-primary-20:#f5f6fa;--gse-semantic-theme-background-container-primary-30:#ebedf5;--gse-semantic-theme-background-container-primary-40:#e7e9f9;--gse-semantic-theme-background-container-primary-45:#f0f1f5;--gse-semantic-theme-background-container-primary-50:#d5def7;--gse-semantic-theme-background-container-primary-60:#adbff0;--gse-semantic-theme-background-container-primary-10d:#131315;--gse-semantic-theme-background-container-primary-20d:#1e1e21;--gse-semantic-theme-background-container-primary-30d:#2a2a2e;--gse-semantic-theme-background-container-primary-35d:#3e4044;--gse-semantic-theme-background-container-primary-40d:#465066;--gse-semantic-theme-background-container-primary-50d:#475675;--gse-semantic-theme-background-container-primary-60d:#354a72;--gse-semantic-theme-background-container-primary-45d:#141c34;--gse-semantic-theme-background-container-secondary-10:#2143a2;--gse-semantic-theme-background-container-secondary-20:#19327a;--gse-semantic-theme-background-container-secondary-30:#102251;--gse-semantic-theme-background-container-secondary-10d:#2143a2;--gse-semantic-theme-background-container-secondary-20d:#19327a;--gse-semantic-theme-background-container-secondary-30d:#102251;--gse-semantic-theme-background-container-tertiary-10:rgba(0, 0, 0, 0);--gse-semantic-theme-background-container-tertiary-20:#c1c6d4;--gse-semantic-theme-background-container-tertiary-10d:rgba(0, 0, 0, 0);--gse-semantic-theme-background-container-tertiary-20d:#4f5157;--gse-semantic-theme-background-container-highContrast-10:#2a2a2e;--gse-semantic-theme-background-container-highContrast-20:#0c193d;--gse-semantic-theme-background-container-highContrast-30:#081129;--gse-semantic-theme-background-container-highContrast-40:#131315;--gse-semantic-theme-background-container-highContrast-10d:#ffffff;--gse-semantic-theme-background-container-highContrast-20d:#adbff0;--gse-semantic-theme-background-container-highContrast-30d:#d5def7;--gse-semantic-theme-background-container-highContrast-40d:#f5f6fa;--gse-semantic-theme-background-container-globalNav-desktop-10:#ffffff;--gse-semantic-theme-background-container-globalNav-desktop-20:#3d538f;--gse-semantic-theme-background-container-globalNav-desktop-30:#152550;--gse-semantic-theme-background-container-globalNav-desktop-40:#263b73;--gse-semantic-theme-background-container-globalNav-desktop-50:#152550;--gse-semantic-theme-background-container-globalNav-desktop-10d:#1e1e21;--gse-semantic-theme-background-container-globalNav-desktop-20d:#141c34;--gse-semantic-theme-background-container-globalNav-desktop-30d:#0f1219;--gse-semantic-theme-background-container-globalNav-desktop-40d:#141929;--gse-semantic-theme-background-container-globalNav-desktop-50d:#131315;--gse-semantic-theme-background-container-globalNav-mobile-10:#1e1e21;--gse-semantic-theme-background-container-globalNav-mobile-20:#dfe3ec;--gse-semantic-theme-background-container-globalNav-mobile-10d:#1e1e21;--gse-semantic-theme-background-container-globalNav-mobile-20d:#141c34;--gse-semantic-theme-background-formControl-input-10:#ffffff;--gse-semantic-theme-background-formControl-input-20:#c1c6d4;--gse-semantic-theme-background-formControl-input-10d:#1e1e21;--gse-semantic-theme-background-formControl-input-20d:#848891;--gse-semantic-theme-background-overlay-10:#263b73a3;--gse-semantic-theme-background-overlay-10d:#040814a3;--gse-semantic-theme-background-system-primary-10:#d5def7;--gse-semantic-theme-background-system-primary-20:#829ce5;--gse-semantic-theme-background-system-primary-30:#2954cb;--gse-semantic-theme-background-system-primary-40:#19327a;--gse-semantic-theme-background-system-primary-50:#0c193d;--gse-semantic-theme-background-system-primary-10d:#102251;--gse-semantic-theme-background-system-primary-20d:#102251;--gse-semantic-theme-background-system-primary-30d:#2143a2;--gse-semantic-theme-background-system-primary-40d:#2954cb;--gse-semantic-theme-background-system-primary-50d:#0c193d;--gse-semantic-theme-background-system-info-5:#f0f1f5;--gse-semantic-theme-background-system-info-10:#dfe3ec;--gse-semantic-theme-background-system-info-20:#9faac6;--gse-semantic-theme-background-system-info-30:#3d538f;--gse-semantic-theme-background-system-info-40:#263b73;--gse-semantic-theme-background-system-info-50:#141c34;--gse-semantic-theme-background-system-info-5d:#141c34;--gse-semantic-theme-background-system-info-10d:#263b73;--gse-semantic-theme-background-system-info-20d:#152550;--gse-semantic-theme-background-system-info-30d:#3d538f;--gse-semantic-theme-background-system-info-40d:#596ea6;--gse-semantic-theme-background-system-info-50d:#141c34;--gse-semantic-theme-background-system-success-5:#cef0e6;--gse-semantic-theme-background-system-success-10:#9de1cd;--gse-semantic-theme-background-system-success-20:#6bd3b3;--gse-semantic-theme-background-system-success-30:#09b581;--gse-semantic-theme-background-system-success-35:#079167;--gse-semantic-theme-background-system-success-40:#056d4d;--gse-semantic-theme-background-system-success-50:#033627;--gse-semantic-theme-background-system-success-5d:#02241a;--gse-semantic-theme-background-system-success-10d:#044834;--gse-semantic-theme-background-system-success-20d:#044834;--gse-semantic-theme-background-system-success-30d:#056d4d;--gse-semantic-theme-background-system-success-35d:#079167;--gse-semantic-theme-background-system-success-40d:#09b581;--gse-semantic-theme-background-system-success-50d:#033627;--gse-semantic-theme-background-system-warning-5:#fef4d8;--gse-semantic-theme-background-system-warning-10:#fce9b2;--gse-semantic-theme-background-system-warning-20:#fbdd8b;--gse-semantic-theme-background-system-warning-30:#f8c73e;--gse-semantic-theme-background-system-warning-40:#9a7b25;--gse-semantic-theme-background-system-warning-50:#3d300c;--gse-semantic-theme-background-system-warning-5d:#3d300c;--gse-semantic-theme-background-system-warning-10d:#6c5619;--gse-semantic-theme-background-system-warning-20d:#6c5619;--gse-semantic-theme-background-system-warning-30d:#c9a132;--gse-semantic-theme-background-system-warning-40d:#f8c73e;--gse-semantic-theme-background-system-warning-50d:#3d300c;--gse-semantic-theme-background-system-error-5:#f9d3da;--gse-semantic-theme-background-system-error-10:#f3a7b5;--gse-semantic-theme-background-system-error-20:#ee7a8f;--gse-semantic-theme-background-system-error-30:#e22245;--gse-semantic-theme-background-system-error-40:#881429;--gse-semantic-theme-background-system-error-50:#440a15;--gse-semantic-theme-background-system-error-5d:#2d070e;--gse-semantic-theme-background-system-error-10d:#440a15;--gse-semantic-theme-background-system-error-20d:#5a0e1c;--gse-semantic-theme-background-system-error-30d:#881429;--gse-semantic-theme-background-system-error-40d:#e22245;--gse-semantic-theme-background-system-error-50d:#440a15;--gse-semantic-theme-background-customAccents-bold-10:#263b73;--gse-semantic-theme-background-customAccents-bold-20:#596ea6;--gse-semantic-theme-background-customAccents-bold-30:#54c6ab;--gse-semantic-theme-background-customAccents-bold-40:#056385;--gse-semantic-theme-background-customAccents-bold-50:#607732;--gse-semantic-theme-background-customAccents-bold-60:#467aae;--gse-semantic-theme-background-customAccents-bold-70:#8a5ecc;--gse-semantic-theme-background-customAccents-bold-80:#89387b;--gse-semantic-theme-background-customAccents-bold-90:#ff5c77;--gse-semantic-theme-background-customAccents-bold-100:#992910;--gse-semantic-theme-background-customAccents-bold-110:#ffc650;--gse-semantic-theme-background-customAccents-bold-120:#81cbe5;--gse-semantic-theme-background-customAccents-bold-130:#5798d9;--gse-semantic-theme-background-customAccents-bold-10d:#3d538f;--gse-semantic-theme-background-customAccents-bold-20d:#6a6d75;--gse-semantic-theme-background-customAccents-bold-30d:#327767;--gse-semantic-theme-background-customAccents-bold-40d:#056385;--gse-semantic-theme-background-customAccents-bold-50d:#607732;--gse-semantic-theme-background-customAccents-bold-60d:#233d57;--gse-semantic-theme-background-customAccents-bold-70d:#674699;--gse-semantic-theme-background-customAccents-bold-80d:#89387b;--gse-semantic-theme-background-customAccents-bold-90d:#993747;--gse-semantic-theme-background-customAccents-bold-100d:#992910;--gse-semantic-theme-background-customAccents-bold-110d:#664f20;--gse-semantic-theme-background-customAccents-bold-120d:#117fa7;--gse-semantic-theme-background-customAccents-bold-130d:#345b82;--gse-semantic-theme-background-customAccents-subtle-10:#9faac6;--gse-semantic-theme-background-customAccents-subtle-20:#b2b7c4;--gse-semantic-theme-background-customAccents-subtle-30:#cceee6;--gse-semantic-theme-background-customAccents-subtle-40:#81cbe5;--gse-semantic-theme-background-customAccents-subtle-50:#c6dd98;--gse-semantic-theme-background-customAccents-subtle-60:#9ac1e8;--gse-semantic-theme-background-customAccents-subtle-70:#cdacff;--gse-semantic-theme-background-customAccents-subtle-80:#ef9ee1;--gse-semantic-theme-background-customAccents-subtle-90:#ff9dad;--gse-semantic-theme-background-customAccents-subtle-100:#ffb5a3;--gse-semantic-theme-background-customAccents-subtle-110:#ffdd96;--gse-semantic-theme-background-customAccents-subtle-120:#9fd6ea;--gse-semantic-theme-background-customAccents-subtle-10d:#152550;--gse-semantic-theme-background-customAccents-subtle-20d:#3e4044;--gse-semantic-theme-background-customAccents-subtle-30d:#193b33;--gse-semantic-theme-background-customAccents-subtle-40d:#003447;--gse-semantic-theme-background-customAccents-subtle-50d:#303b19;--gse-semantic-theme-background-customAccents-subtle-60d:#1a2e41;--gse-semantic-theme-background-customAccents-subtle-70d:#34234d;--gse-semantic-theme-background-customAccents-subtle-80d:#451c3e;--gse-semantic-theme-background-customAccents-subtle-90d:#4d1c24;--gse-semantic-theme-background-customAccents-subtle-100d:#661c0a;--gse-semantic-theme-background-customAccents-subtle-110d:#4d3b18;--gse-semantic-theme-background-customAccents-subtle-120d:#04445c;--gse-semantic-theme-background-customAccents-colorSwatch-10:#ff8f76;--gse-semantic-theme-background-customAccents-colorSwatch-20:#ffbec9;--gse-semantic-theme-background-customAccents-colorSwatch-30:#c6dd98;--gse-semantic-theme-background-customAccents-colorSwatch-40:#ffd173;--gse-semantic-theme-background-customAccents-colorSwatch-50:#f5bfeb;--gse-semantic-theme-background-customAccents-colorSwatch-60:#adbff0;--gse-semantic-theme-background-customAccents-colorSwatch-70:#bcd6f0;--gse-semantic-theme-background-customAccents-colorSwatch-80:#81cbe5;--gse-semantic-theme-background-customAccents-colorSwatch-10d:#992910;--gse-semantic-theme-background-customAccents-colorSwatch-20d:#662530;--gse-semantic-theme-background-customAccents-colorSwatch-30d:#404f22;--gse-semantic-theme-background-customAccents-colorSwatch-40d:#664f20;--gse-semantic-theme-background-customAccents-colorSwatch-50d:#5c2652;--gse-semantic-theme-background-customAccents-colorSwatch-60d:#102251;--gse-semantic-theme-background-customAccents-colorSwatch-70d:#233d57;--gse-semantic-theme-background-customAccents-colorSwatch-80d:#003447;--gse-semantic-theme-background-customAccents-status-10:#09b581;--gse-semantic-theme-background-customAccents-status-20:#e22245;--gse-semantic-theme-background-customAccents-status-30:#f8c73e;--gse-semantic-theme-background-customAccents-status-40:#2143a2;--gse-semantic-theme-background-customAccents-status-50:#848891;--gse-semantic-theme-background-customAccents-status-60:#b74ba4;--gse-semantic-theme-background-customAccents-status-70:#ff451a;--gse-semantic-theme-background-customAccents-status-10d:#09b581;--gse-semantic-theme-background-customAccents-status-20d:#e22245;--gse-semantic-theme-background-customAccents-status-30d:#f8c73e;--gse-semantic-theme-background-customAccents-status-40d:#2954cb;--gse-semantic-theme-background-customAccents-status-50d:#848891;--gse-semantic-theme-background-customAccents-status-60d:#b74ba4;--gse-semantic-theme-background-customAccents-status-70d:#ff451a;--gse-semantic-theme-background-customAccents-chatBubble-10:#f5f6fa;--gse-semantic-theme-background-customAccents-chatBubble-20:#e6f4fa;--gse-semantic-theme-background-customAccents-chatBubble-30:#ffece8;--gse-semantic-theme-background-customAccents-chatBubble-40:#fff4dc;--gse-semantic-theme-background-customAccents-chatBubble-50:#eee3ff;--gse-semantic-theme-background-customAccents-chatBubble-10d:#131315;--gse-semantic-theme-background-customAccents-chatBubble-20d:#002533;--gse-semantic-theme-background-customAccents-chatBubble-30d:#2f1007;--gse-semantic-theme-background-customAccents-chatBubble-40d:#3d300c;--gse-semantic-theme-background-customAccents-chatBubble-50d:#282136;--gse-semantic-theme-background-customAccents-ai-10:#cdeaf5;--gse-semantic-theme-background-customAccents-ai-20:#c5bef1;--gse-semantic-theme-background-customAccents-ai-20d:#443989;--gse-semantic-theme-background-customAccents-ai-10d:#056385;--gse-semantic-theme-background-customAccents-globalNav-10:#19327a;--gse-semantic-theme-background-customAccents-globalNav-20:#2143a2;--gse-semantic-theme-background-customAccents-globalNav-30:#2954cb;--gse-semantic-theme-background-customAccents-globalNav-10d:#0c193d;--gse-semantic-theme-background-customAccents-globalNav-20d:#19327a;--gse-semantic-theme-background-customAccents-globalNav-30d:#102251;--gse-semantic-theme-foreground-primary-10:#4f5157;--gse-semantic-theme-foreground-primary-20:#3e4044;--gse-semantic-theme-foreground-primary-30:#2a2a2e;--gse-semantic-theme-foreground-primary-10d:#b2b7c4;--gse-semantic-theme-foreground-primary-20d:#cad1e1;--gse-semantic-theme-foreground-primary-30d:#ffffff;--gse-semantic-theme-foreground-secondary-10:#ffffff;--gse-semantic-theme-foreground-secondary-20:#848891;--gse-semantic-theme-foreground-secondary-30:#6a6d75;--gse-semantic-theme-foreground-secondary-10d:#ffffff;--gse-semantic-theme-foreground-secondary-20d:#cad1e1;--gse-semantic-theme-foreground-secondary-30d:#c1c6d4;--gse-semantic-theme-foreground-tertiary-10:#2143a2;--gse-semantic-theme-foreground-tertiary-15:#2143a2;--gse-semantic-theme-foreground-tertiary-20:#19327a;--gse-semantic-theme-foreground-tertiary-30:#102251;--gse-semantic-theme-foreground-tertiary-10d:#ffffff;--gse-semantic-theme-foreground-tertiary-20d:#ffffff;--gse-semantic-theme-foreground-tertiary-30d:#ffffff;--gse-semantic-theme-foreground-tertiary-05:#5476d5;--gse-semantic-theme-foreground-tertiary-05d:#5476d5;--gse-semantic-theme-foreground-highContrast-10:#ffffff;--gse-semantic-theme-foreground-highContrast-20:#dce1ed;--gse-semantic-theme-foreground-highContrast-30:#c1c6d4;--gse-semantic-theme-foreground-highContrast-10d:#1e1e21;--gse-semantic-theme-foreground-highContrast-20d:#3e4044;--gse-semantic-theme-foreground-highContrast-30d:#4f5157;--gse-semantic-theme-foreground-system-primary-10:#2954cb;--gse-semantic-theme-foreground-system-primary-10d:#2143a2;--gse-semantic-theme-foreground-system-info-10:#3d538f;--gse-semantic-theme-foreground-system-info-10d:#596ea6;--gse-semantic-theme-foreground-system-success-10:#056d4d;--gse-semantic-theme-foreground-system-success-10d:#09b581;--gse-semantic-theme-foreground-system-warning-10:#9a7b25;--gse-semantic-theme-foreground-system-warning-10d:#f8c73e;--gse-semantic-theme-foreground-system-error-10:#b51b37;--gse-semantic-theme-foreground-system-error-10d:#e84e6a;--gse-semantic-theme-foreground-specialAccents-brand-10:#ff451a;--gse-semantic-theme-foreground-specialAccents-brand-20:#141929;--gse-semantic-theme-foreground-specialAccents-brand-10d:#ff451a;--gse-semantic-theme-foreground-specialAccents-brand-20d:#ffffff;--gse-semantic-theme-foreground-specialAccents-ai-10:#1589b2;--gse-semantic-theme-foreground-specialAccents-ai-10d:#1589b2;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-10:#ffffff;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-20:#2143a2;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-30:#19327a;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-40:#d5def7;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-50:#152550;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-50d:#ffffff;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-10d:#ffffff;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-20d:#ffffff;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-30d:#d5def7;--gse-semantic-theme-foreground-specialAccents-globalNav-desktop-40d:#d5def7;--gse-semantic-theme-foreground-specialAccents-globalNav-mobile-10:#ffffff;--gse-semantic-theme-foreground-specialAccents-globalNav-mobile-10d:#ffffff;--gse-semantic-theme-foreground-link-10:#2143a2;--gse-semantic-theme-foreground-link-20:#19327a;--gse-semantic-theme-foreground-link-30:#102251;--gse-semantic-theme-foreground-link-40:#3d538f;--gse-semantic-theme-foreground-link-10d:#829ce5;--gse-semantic-theme-foreground-link-20d:#adbff0;--gse-semantic-theme-foreground-link-30d:#d5def7;--gse-semantic-theme-foreground-link-40d:#808db2;--gse-semantic-theme-foreground-icon-10:#4f5157;--gse-semantic-theme-foreground-icon-10d:#b2b7c4;--gse-semantic-theme-foreground-formControl-clickInput-10:#2143a2;--gse-semantic-theme-foreground-formControl-clickInput-20:#19327a;--gse-semantic-theme-foreground-formControl-clickInput-30:#102251;--gse-semantic-theme-foreground-formControl-clickInput-40:#a3a8b5;--gse-semantic-theme-foreground-formControl-clickInput-10d:#5476d5;--gse-semantic-theme-foreground-formControl-clickInput-20d:#829ce5;--gse-semantic-theme-foreground-formControl-clickInput-30d:#adbff0;--gse-semantic-theme-foreground-formControl-clickInput-40d:#848891;--gse-semantic-theme-foreground-search-10:#2a2a2e;--gse-semantic-theme-foreground-customAccents-ai-10:#28afe0;--gse-semantic-theme-foreground-customAccents-ai-20:#6e5ddb;--gse-semantic-theme-foreground-customAccents-ai-10d:#9fd6ea;--gse-semantic-theme-foreground-customAccents-ai-20d:#a89ee9;--gse-semantic-theme-border-focus-10:#5476d5;--gse-semantic-theme-border-focus-10d:#5476d5;--gse-semantic-theme-border-divider-10:#ffffff;--gse-semantic-theme-border-divider-20:#dce1ed;--gse-semantic-theme-border-divider-30:#2143a2;--gse-semantic-theme-border-divider-10d:#1e1e21;--gse-semantic-theme-border-divider-20d:#4f5157;--gse-semantic-theme-border-divider-30d:#2143a2;--gse-semantic-theme-border-divider-40d:#adbff0;--gse-semantic-theme-border-edges-default-0:#bfc6d9;--gse-semantic-theme-border-edges-default-5:#cad1e1;--gse-semantic-theme-border-edges-default-10:#c1c6d4;--gse-semantic-theme-border-edges-default-20:#4f5157;--gse-semantic-theme-border-edges-default-30:#3e4044;--gse-semantic-theme-border-edges-default-10d:#4f5157;--gse-semantic-theme-border-edges-default-20d:#c1c6d4;--gse-semantic-theme-border-edges-default-30d:#cad1e1;--gse-semantic-theme-border-edges-default-5d:#3e4044;--gse-semantic-theme-border-edges-default-0d:#141929;--gse-semantic-theme-border-edges-enabled-10:#2143a2;--gse-semantic-theme-border-edges-enabled-10d:#2143a2;--gse-semantic-theme-border-edges-hover-10:#5476d5;--gse-semantic-theme-border-edges-hover-20:#102251;--gse-semantic-theme-border-edges-hover-10d:#2954cb;--gse-semantic-theme-border-edges-hover-20d:#19327a;--gse-semantic-theme-border-edges-active-10:#19327a;--gse-semantic-theme-border-edges-active-10d:#5476d5;--gse-semantic-theme-border-edges-emphasis-default:#6a6d75;--gse-semantic-theme-border-edges-emphasis-mid:#829ce5;--gse-semantic-theme-border-edges-globalNav-10:#3d538f;--gse-semantic-theme-border-edges-globalNav-20:#cad1e1;--gse-semantic-theme-border-edges-globalNav-30:rgba(0, 0, 0, 0);--gse-semantic-theme-border-edges-globalNav-10d:#263b73;--gse-semantic-theme-border-edges-globalNav-20d:#3e4044;--gse-semantic-theme-border-edges-globalNav-30d:#3e4044;--gse-semantic-theme-border-system-primary-10:#829ce5;--gse-semantic-theme-border-system-primary-10d:#102251;--gse-semantic-theme-border-system-info-10:#bfc6d9;--gse-semantic-theme-border-system-info-10d:#263b73;--gse-semantic-theme-border-system-success-10:#9de1cd;--gse-semantic-theme-border-system-success-10d:#044834;--gse-semantic-theme-border-system-warning-10:#fce9b2;--gse-semantic-theme-border-system-warning-10d:#6c5619;--gse-semantic-theme-border-system-error-10:#f3a7b5;--gse-semantic-theme-border-system-error-20:#e22245;--gse-semantic-theme-border-system-error-10d:#5a0e1c;--gse-semantic-theme-border-system-error-20d:#e22245;--gse-semantic-theme-border-inputs-default-10:#a3a8b5;--gse-semantic-theme-border-inputs-default-10d:#848891;--gse-semantic-theme-border-inputs-hover-10:#19327a;--gse-semantic-theme-border-inputs-hover-10d:#829ce5;--gse-semantic-theme-border-inputs-active-10:#102251;--gse-semantic-theme-border-inputs-active-10d:#adbff0;--gse-semantic-theme-border-customAccents-ai-10:#28afe0;--gse-semantic-theme-border-customAccents-ai-20:#8b7de2;--gse-semantic-theme-border-customAccents-ai-10d:#056385;--gse-semantic-theme-border-customAccents-ai-20d:#6e5ddb;--gse-semantic-theme-borderRadius-interactive-xlarge:100%;--gse-semantic-theme-borderRadius-interactive-large:16px;--gse-semantic-theme-borderRadius-interactive-small:4px;--gse-semantic-theme-borderRadius-interactive-2xl:16px;--gse-semantic-theme-borderRadius-container-large:16px;--gse-semantic-theme-borderRadius-container-medium:8px;--gse-semantic-theme-borderRadius-container-small:4px;--gse-semantic-theme-borderRadius-formControl-input-large:8px;--gse-semantic-theme-borderRadius-formControl-input-medium:4px;--gse-semantic-theme-borderRadius-formControl-input-small:2px;--gse-semantic-theme-borderRadius-focus-full:100%;--gse-semantic-theme-borderRadius-focus-xlarge:20px;--gse-semantic-theme-borderRadius-focus-large:16px;--gse-semantic-theme-borderRadius-focus-medium:8px;--gse-semantic-theme-borderRadius-focus-small:4px;--gse-semantic-theme-borderRadius-focus-xsmall:2px;--gse-semantic-theme-borderRadius-focus-2xl:16px;--gse-semantic-theme-charts-categoricalData-category1:#056385;--gse-semantic-theme-charts-categoricalData-category1d:#53bee5;--gse-semantic-theme-charts-categoricalData-category2:#5798d9;--gse-semantic-theme-charts-categoricalData-category2d:#467aae;--gse-semantic-theme-charts-categoricalData-category3:#ac75ff;--gse-semantic-theme-charts-categoricalData-category3d:#ac75ff;--gse-semantic-theme-charts-categoricalData-category4:#89387b;--gse-semantic-theme-charts-categoricalData-category4d:#e55ecd;--gse-semantic-theme-charts-categoricalData-category5:#ff5c77;--gse-semantic-theme-charts-categoricalData-category5d:#ff5c77;--gse-semantic-theme-charts-categoricalData-category6:#ffb5a3;--gse-semantic-theme-charts-categoricalData-category6d:#cc3715;--gse-semantic-theme-charts-categoricalData-category7:#ffc650;--gse-semantic-theme-charts-categoricalData-category7d:#ffc650;--gse-semantic-theme-charts-categoricalData-category8:#c6dd98;--gse-semantic-theme-charts-categoricalData-category8d:#a0c654;--gse-semantic-theme-charts-categoricalData-category9:#54c6ab;--gse-semantic-theme-charts-categoricalData-category9d:#54c6ab;--gse-semantic-theme-charts-categoricalData-category10:#263b73;--gse-semantic-theme-charts-categoricalData-category10d:#3d538f;--gse-semantic-theme-charts-categoricalData-subtle:#cad1e1;--gse-semantic-theme-charts-categoricalData-subtled:#848891;--gse-semantic-theme-charts-numericalData-singleColor-level1:#cdeaf5;--gse-semantic-theme-charts-numericalData-singleColor-level1d:#e6f4fa;--gse-semantic-theme-charts-numericalData-singleColor-level2:#9fd6ea;--gse-semantic-theme-charts-numericalData-singleColor-level2d:#cdeaf5;--gse-semantic-theme-charts-numericalData-singleColor-level3:#81cbe5;--gse-semantic-theme-charts-numericalData-singleColor-level3d:#9fd6ea;--gse-semantic-theme-charts-numericalData-singleColor-level4:#53bee5;--gse-semantic-theme-charts-numericalData-singleColor-level4d:#81cbe5;--gse-semantic-theme-charts-numericalData-singleColor-level5:#28afe0;--gse-semantic-theme-charts-numericalData-singleColor-level5d:#53bee5;--gse-semantic-theme-charts-numericalData-singleColor-level6:#1589b2;--gse-semantic-theme-charts-numericalData-singleColor-level6d:#28afe0;--gse-semantic-theme-charts-numericalData-singleColor-level7:#056385;--gse-semantic-theme-charts-numericalData-singleColor-level7d:#1589b2;--gse-semantic-theme-charts-numericalData-singleColor-level8:#04445c;--gse-semantic-theme-charts-numericalData-singleColor-level8d:#056385;--gse-semantic-theme-charts-numericalData-singleColor-level9:#002533;--gse-semantic-theme-charts-numericalData-singleColor-level9d:#04445c;--gse-semantic-theme-charts-numericalData-singleColor-level10:#052a38;--gse-semantic-theme-charts-numericalData-singleColor-level10d:#003447;--gse-semantic-theme-charts-numericalData-multiColor-green:#81cbe5;--gse-semantic-theme-charts-numericalData-multiColor-greend:#53bee5;--gse-semantic-theme-charts-numericalData-multiColor-red:#ff9dad;--gse-semantic-theme-charts-numericalData-multiColor-redd:#ff7d92;--gse-semantic-theme-charts-numericalData-multiColor-yellow:#ffdd96;--gse-semantic-theme-charts-numericalData-multiColor-yellowd:#ffd173;--gse-semantic-theme-charts-foreground-10:#ffffff;--gse-semantic-theme-charts-foreground-20:#6a6d75;--gse-semantic-theme-charts-foreground-30:#4f5157;--gse-semantic-theme-charts-foreground-40:#2a2a2e;--gse-semantic-theme-charts-foreground-10d:#2a2a2e;--gse-semantic-theme-charts-foreground-20d:#c1c6d4;--gse-semantic-theme-charts-foreground-30d:#c1c6d4;--gse-semantic-theme-charts-foreground-40d:#ffffff;--gse-semantic-theme-charts-border-10:#ebedf5;--gse-semantic-theme-charts-border-20:#c1c6d4;--gse-semantic-theme-charts-border-30:#b2b7c4;--gse-semantic-theme-charts-border-10d:#3e4044;--gse-semantic-theme-charts-border-20d:#848891;--gse-semantic-theme-charts-border-30d:#a3a8b5;--gse-semantic-theme-charts-targetLine-10:#ff8f76;--gse-semantic-theme-charts-targetLine-10d:#ff8f76;--gse-semantic-theme-charts-fill-10:#ffffff;--gse-semantic-theme-charts-fill-10d:#1e1e21;--gse-semantic-theme-charts-background-10:#ebedf5;--gse-semantic-theme-charts-background-10d:#3e4044;--gse-semantic-theme-charts-sparkline-mono:#2143a2;--gse-semantic-theme-charts-sparkline-monod:#5476d5;--gse-semantic-theme-charts-sparkline-negative:#b51b37;--gse-semantic-theme-charts-sparkline-negatived:#e84e6a;--gse-semantic-theme-charts-sparkline-positive:#056d4d;--gse-semantic-theme-charts-sparkline-positived:#09b581;--gse-semantic-theme-charts-sparkline-neutral:#9faac6;--gse-semantic-theme-charts-sparkline-neutrald:#808db2;--gse-semantic-theme-charts-sparkline-trendline:#cad1e1;--gse-semantic-theme-charts-sparkline-trendlined:#6a6d75;--gse-semantic-zIndex-base:0;--gse-semantic-zIndex-showFocus:1;--gse-semantic-zIndex-sticky:1;--gse-semantic-zIndex-popup:100;--gse-semantic-zIndex-popover:200;--gse-semantic-zIndex-tooltip:200;--gse-semantic-zIndex-panel:300;--gse-semantic-zIndex-navbar:400;--gse-semantic-zIndex-sidebar:400;--gse-semantic-zIndex-toast:500;--gse-semantic-zIndex-modal:600;--gse-semantic-opacity-disabled:0.5;--gse-semantic-opacity-shroud:0.64;--gse-semantic-container-lg-borderRadius:16px;--gse-semantic-container-lg-gap:16px;--gse-semantic-container-lg-padding:24px;--gse-semantic-container-lg-height:40px;--gse-semantic-container-md-gap:12px;--gse-semantic-container-md-borderRadius:8px;--gse-semantic-container-md-height:32px;--gse-semantic-container-md-padding:16px;--gse-semantic-container-sm-borderRadius:4px;--gse-semantic-container-sm-gap:8px;--gse-semantic-container-sm-padding:12px;--gse-semantic-container-sm-minHeight:20px;--gse-semantic-container-sm-height:32px;--gse-semantic-container-xl-gap:24px;--gse-semantic-container-xl-padding:32px;--gse-semantic-container-xl-height:48px;--gse-semantic-container-xs-gap:4px;--gse-semantic-container-xs-padding:8px;--gse-semantic-container-xs-minHeight:16px;--gse-semantic-container-xs-height:20px;--gse-semantic-container-edges-borderWidth:1px;--gse-semantic-container-divider-borderWidth:1px;--gse-semantic-container-emphasis-width:4px;--gse-semantic-container-2xs-gap:2px;--gse-semantic-container-2xs-padding:2px;--gse-semantic-container-2xs-size:12px;--gse-semantic-container-full-borderRadius:100%;--gse-semantic-container-3xs-size:8px;--gse-semantic-container-4xs-size:4px;--gse-semantic-body-sm-regular-fontFamily:\"Noto Sans\";--gse-semantic-body-sm-regular-fontWeight:400;--gse-semantic-body-sm-regular-fontSize:12px;--gse-semantic-body-sm-regular-lineHeight:18px;--gse-semantic-body-sm-link-fontFamily:\"Noto Sans\";--gse-semantic-body-sm-link-fontWeight:600;--gse-semantic-body-sm-link-fontSize:12px;--gse-semantic-body-sm-link-lineHeight:18px;--gse-semantic-body-sm-link-textDecoration:underline;--gse-semantic-body-sm-bold-fontFamily:\"Noto Sans\";--gse-semantic-body-sm-bold-fontWeight:700;--gse-semantic-body-sm-bold-fontSize:12px;--gse-semantic-body-sm-bold-lineHeight:18px;--gse-semantic-body-sm-semiBold-fontFamily:\"Noto Sans\";--gse-semantic-body-sm-semiBold-fontWeight:600;--gse-semantic-body-sm-semiBold-fontSize:12px;--gse-semantic-body-sm-semiBold-lineHeight:18px;--gse-semantic-body-md-regular-fontFamily:\"Noto Sans\";--gse-semantic-body-md-regular-fontWeight:400;--gse-semantic-body-md-regular-fontSize:14px;--gse-semantic-body-md-regular-lineHeight:20px;--gse-semantic-body-md-link-fontFamily:\"Noto Sans\";--gse-semantic-body-md-link-fontWeight:600;--gse-semantic-body-md-link-fontSize:14px;--gse-semantic-body-md-link-lineHeight:20px;--gse-semantic-body-md-link-textDecoration:underline;--gse-semantic-body-md-bold-fontFamily:\"Noto Sans\";--gse-semantic-body-md-bold-fontWeight:700;--gse-semantic-body-md-bold-fontSize:14px;--gse-semantic-body-md-bold-lineHeight:20px;--gse-semantic-body-md-semiBold-fontFamily:\"Noto Sans\";--gse-semantic-body-md-semiBold-fontWeight:600;--gse-semantic-body-md-semiBold-fontSize:14px;--gse-semantic-body-md-semiBold-lineHeight:20px;--gse-semantic-body-lg-regular-fontFamily:\"Noto Sans\";--gse-semantic-body-lg-regular-fontWeight:400;--gse-semantic-body-lg-regular-fontSize:16px;--gse-semantic-body-lg-regular-lineHeight:24px;--gse-semantic-body-lg-link-fontFamily:\"Noto Sans\";--gse-semantic-body-lg-link-fontWeight:600;--gse-semantic-body-lg-link-fontSize:16px;--gse-semantic-body-lg-link-lineHeight:24px;--gse-semantic-body-lg-link-textDecoration:underline;--gse-semantic-body-lg-bold-fontFamily:\"Noto Sans\";--gse-semantic-body-lg-bold-fontWeight:700;--gse-semantic-body-lg-bold-fontSize:16px;--gse-semantic-body-lg-bold-lineHeight:24px;--gse-semantic-body-lg-semiBold-fontFamily:\"Noto Sans\";--gse-semantic-body-lg-semiBold-fontWeight:600;--gse-semantic-body-lg-semiBold-fontSize:16px;--gse-semantic-body-lg-semiBold-lineHeight:24px;--gse-semantic-body-xs-regular-fontFamily:\"Noto Sans\";--gse-semantic-body-xs-regular-fontWeight:400;--gse-semantic-body-xs-regular-fontSize:10px;--gse-semantic-body-xs-regular-lineHeight:14px;--gse-semantic-body-xs-link-fontFamily:\"Noto Sans\";--gse-semantic-body-xs-link-fontWeight:600;--gse-semantic-body-xs-link-fontSize:10px;--gse-semantic-body-xs-link-lineHeight:14px;--gse-semantic-body-xs-link-textDecoration:underline;--gse-semantic-body-xs-bold-fontFamily:\"Noto Sans\";--gse-semantic-body-xs-bold-fontWeight:700;--gse-semantic-body-xs-bold-fontSize:10px;--gse-semantic-body-xs-bold-lineHeight:14px;--gse-semantic-body-xs-semiBold-fontFamily:\"Noto Sans\";--gse-semantic-body-xs-semiBold-fontWeight:600;--gse-semantic-body-xs-semiBold-fontSize:10px;--gse-semantic-body-xs-semiBold-lineHeight:14px;--gse-semantic-body-xl-regular-fontFamily:\"Noto Sans\";--gse-semantic-body-xl-regular-fontWeight:400;--gse-semantic-body-xl-regular-fontSize:18px;--gse-semantic-body-xl-regular-lineHeight:24px;--gse-semantic-body-xl-link-fontFamily:\"Noto Sans\";--gse-semantic-body-xl-link-fontWeight:600;--gse-semantic-body-xl-link-fontSize:18px;--gse-semantic-body-xl-link-lineHeight:24px;--gse-semantic-body-xl-link-textDecoration:underline;--gse-semantic-body-xl-bold-fontFamily:\"Noto Sans\";--gse-semantic-body-xl-bold-fontWeight:700;--gse-semantic-body-xl-bold-fontSize:18px;--gse-semantic-body-xl-bold-lineHeight:24px;--gse-semantic-body-xl-semiBold-fontFamily:\"Noto Sans\";--gse-semantic-body-xl-semiBold-fontWeight:600;--gse-semantic-body-xl-semiBold-fontSize:18px;--gse-semantic-body-xl-semiBold-lineHeight:24px;--gse-semantic-body-2xl-regular-fontFamily:\"Noto Sans\";--gse-semantic-body-2xl-regular-fontWeight:400;--gse-semantic-body-2xl-regular-fontSize:24px;--gse-semantic-body-2xl-regular-lineHeight:32px;--gse-semantic-body-2xl-link-fontFamily:\"Noto Sans\";--gse-semantic-body-2xl-link-fontWeight:600;--gse-semantic-body-2xl-link-fontSize:24px;--gse-semantic-body-2xl-link-lineHeight:32px;--gse-semantic-body-2xl-link-textDecoration:underline;--gse-semantic-body-2xl-bold-fontFamily:\"Noto Sans\";--gse-semantic-body-2xl-bold-fontWeight:700;--gse-semantic-body-2xl-bold-fontSize:24px;--gse-semantic-body-2xl-bold-lineHeight:32px;--gse-semantic-body-2xl-semiBold-fontFamily:\"Noto Sans\";--gse-semantic-body-2xl-semiBold-fontWeight:600;--gse-semantic-body-2xl-semiBold-fontSize:24px;--gse-semantic-body-2xl-semiBold-lineHeight:32px;--gse-semantic-heading-xs-bold-fontFamily:Urbanist;--gse-semantic-heading-xs-bold-fontWeight:700;--gse-semantic-heading-xs-bold-fontSize:14px;--gse-semantic-heading-xs-bold-lineHeight:24px;--gse-semantic-heading-xs-semiBold-fontFamily:Urbanist;--gse-semantic-heading-xs-semiBold-fontWeight:600;--gse-semantic-heading-xs-semiBold-fontSize:14px;--gse-semantic-heading-xs-semiBold-lineHeight:24px;--gse-semantic-heading-sm-bold-fontFamily:Urbanist;--gse-semantic-heading-sm-bold-fontWeight:700;--gse-semantic-heading-sm-bold-fontSize:16px;--gse-semantic-heading-sm-bold-lineHeight:24px;--gse-semantic-heading-sm-semiBold-fontFamily:Urbanist;--gse-semantic-heading-sm-semiBold-fontWeight:600;--gse-semantic-heading-sm-semiBold-fontSize:16px;--gse-semantic-heading-sm-semiBold-lineHeight:24px;--gse-semantic-heading-md-bold-fontFamily:Urbanist;--gse-semantic-heading-md-bold-fontWeight:700;--gse-semantic-heading-md-bold-fontSize:18px;--gse-semantic-heading-md-bold-lineHeight:27px;--gse-semantic-heading-md-semiBold-fontFamily:Urbanist;--gse-semantic-heading-md-semiBold-fontWeight:600;--gse-semantic-heading-md-semiBold-fontSize:18px;--gse-semantic-heading-md-semiBold-lineHeight:27px;--gse-semantic-heading-lg-bold-fontFamily:Urbanist;--gse-semantic-heading-lg-bold-fontWeight:700;--gse-semantic-heading-lg-bold-fontSize:24px;--gse-semantic-heading-lg-bold-lineHeight:32px;--gse-semantic-heading-lg-semiBold-fontFamily:Urbanist;--gse-semantic-heading-lg-semiBold-fontWeight:600;--gse-semantic-heading-lg-semiBold-fontSize:24px;--gse-semantic-heading-lg-semiBold-lineHeight:32px;--gse-semantic-heading-xl-bold-fontFamily:Urbanist;--gse-semantic-heading-xl-bold-fontWeight:700;--gse-semantic-heading-xl-bold-fontSize:36px;--gse-semantic-heading-xl-bold-lineHeight:44px;--gse-semantic-heading-xl-semiBold-fontFamily:Urbanist;--gse-semantic-heading-xl-semiBold-fontWeight:600;--gse-semantic-heading-xl-semiBold-fontSize:36px;--gse-semantic-heading-xl-semiBold-lineHeight:44px;--gse-semantic-heading-overline-fontFamily:Urbanist;--gse-semantic-heading-overline-fontWeight:600;--gse-semantic-heading-overline-fontSize:12px;--gse-semantic-heading-overline-lineHeight:16px;--gse-semantic-heading-overline-textCase:uppercase;--gse-semantic-heading-overline-letterSpacing:1px;--gse-semantic-heading-2xl-bold-fontFamily:Urbanist;--gse-semantic-heading-2xl-bold-fontWeight:700;--gse-semantic-heading-2xl-bold-fontSize:48px;--gse-semantic-heading-2xl-bold-lineHeight:58px;--gse-semantic-heading-3xl-bold-fontFamily:Urbanist;--gse-semantic-heading-3xl-bold-fontWeight:700;--gse-semantic-heading-3xl-bold-fontSize:60px;--gse-semantic-heading-3xl-bold-lineHeight:72px;--gse-semantic-heading-4xl-bold-fontFamily:Urbanist;--gse-semantic-heading-4xl-bold-fontWeight:700;--gse-semantic-heading-4xl-bold-fontSize:72px;--gse-semantic-heading-4xl-bold-lineHeight:86px;--gse-semantic-subheading-bold-fontFamily:Urbanist;--gse-semantic-subheading-bold-fontWeight:700;--gse-semantic-subheading-bold-fontSize:14px;--gse-semantic-subheading-bold-lineHeight:20px;--gse-semantic-subheading-semiBold-fontFamily:Urbanist;--gse-semantic-subheading-semiBold-fontWeight:600;--gse-semantic-subheading-semiBold-fontSize:14px;--gse-semantic-subheading-semiBold-lineHeight:20px;--gse-semantic-subheading-regular-fontFamily:Urbanist;--gse-semantic-subheading-regular-fontWeight:400;--gse-semantic-subheading-regular-fontSize:14px;--gse-semantic-subheading-regular-lineHeight:20px;--gse-semantic-interactive-md-size:32px;--gse-semantic-interactive-md-gap:4px;--gse-semantic-interactive-md-padding:8px;--gse-semantic-interactive-sm-size:24px;--gse-semantic-interactive-sm-gap:2px;--gse-semantic-interactive-sm-padding:4px;--gse-semantic-interactive-sm-borderRadius:4px;--gse-semantic-interactive-lg-borderRadius:16px;--gse-semantic-interactive-lg-gap:8px;--gse-semantic-interactive-lg-padding:12px;--gse-semantic-interactive-edges-borderWidth:1px;--gse-semantic-interactive-divider-sm-borderWidth:1px;--gse-semantic-interactive-divider-lg-borderWidth:2px;--gse-semantic-interactive-xl-gap:12px;--gse-semantic-interactive-xl-padding:16px;--gse-semantic-interactive-xl-size:40px;--gse-semantic-interactive-xl-borderRadius:100%;--gse-semantic-interactive-xs-padding:2px;--gse-semantic-interactive-xs-size:20px;--gse-semantic-interactive-xs-height:20px;--gse-semantic-interactive-xs-width:20px;--gse-semantic-interactive-4xl-size:112px;--gse-semantic-focusOutline-full-borderRadius:100%;--gse-semantic-focusOutline-xl-borderRadius:20px;--gse-semantic-focusOutline-lg-borderRadius:16px;--gse-semantic-focusOutline-md-borderRadius:8px;--gse-semantic-focusOutline-md-borderWidth:2px;--gse-semantic-focusOutline-sm-borderRadius:4px;--gse-semantic-focusOutline-sm-borderWidth:1px;--gse-semantic-focusOutline-xs-borderRadius:2px;--gse-semantic-focusOutline-offset:1px;--gse-semantic-formControl-form-maxWidth:600px;--gse-semantic-formControl-form-margin:24px;--gse-semantic-formControl-formBody-paddingBottom:32px;--gse-semantic-formControl-formBody-gap:16px;--gse-semantic-formControl-textInput-lg-borderRadius:8px;--gse-semantic-formControl-textInput-sm-borderRadius:2px;--gse-semantic-formControl-textInput-md-borderRadius:4px;--gse-semantic-formControl-textInput-edges-borderWidth:1px;--gse-semantic-formControl-textInput-divider-borderWidth:1px;--gse-semantic-formControl-field-textInput-small-padding:8px;--gse-semantic-formControl-field-textInput-gap:12px;--gse-semantic-formControl-field-textInput-md-height:32px;--gse-semantic-formControl-field-textInput-medium-padding:12px;--gse-semantic-formControl-field-textInput-minWidth:48px;--gse-semantic-formControl-field-textInput-lg-height:98px;--gse-semantic-formControl-field-gap:4px;--gse-semantic-formControl-field-padding:8px;--gse-semantic-formControl-field-clickInput-gap:8px;--gse-semantic-formControl-field-clickInput-padding:4px;--gse-semantic-formControl-field-clickInput-md-size:32px;--gse-semantic-formControl-field-clickInput-sm-size:16px;--gse-semantic-formControl-field-groupedInput-gap:8px;--gse-semantic-formControl-clickInput-handle-borderWidth:2px;--gse-semantic-formControl-formHeader-paddingBottom:20px;--gse-semantic-formControl-formHeader-gap:4px;--gse-semantic-formControl-fieldset-paddingBottom:48px;--gse-semantic-formControl-fieldset-header-paddingBottom:20px;--gse-semantic-formControl-fieldset-header-gap:4px;--gse-semantic-assets-lg-size:32px;--gse-semantic-assets-md-size:24px;--gse-semantic-assets-sm-size:16px;--gse-semantic-assets-xl-size:48px;--gse-semantic-assets-xs-size:8px;--gse-semantic-divider-width:1px;--gse-semantic-divider-sm-width:2px;--gse-semantic-divider-sm-height:20px;--gse-semantic-divider-sm-margin:2px;--gse-semantic-divider-xs-margin:1px;--gse-semantic-divider-md-margin:4px;--gse-semantic-divider-md-padding:0 4px;--gse-semantic-divider-lg-margin:8px;--gse-semantic-divider-track-height:4px;--gse-semantic-divider-indicator-width:2px;--gse-semantic-code-sm-regular-fontFamily:\"Noto Sans Mono\";--gse-semantic-code-sm-regular-fontWeight:400;--gse-semantic-code-sm-regular-fontSize:12px;--gse-semantic-code-sm-regular-lineHeight:16px;--gse-semantic-background-interactive-primary-default:#2143a2;--gse-semantic-background-interactive-primary-hover:#19327a;--gse-semantic-background-interactive-primary-active:#102251;--gse-semantic-background-interactive-secondary-default:#e7e9f9;--gse-semantic-background-interactive-secondary-hover:#d5def7;--gse-semantic-background-interactive-secondary-active:#adbff0;--gse-semantic-background-interactive-tertiary-default:rgba(0, 0, 0, 0);--gse-semantic-background-interactive-tertiary-hover:#19327a;--gse-semantic-background-interactive-tertiary-active:#102251;--gse-semantic-background-interactive-ghost-default:rgba(0, 0, 0, 0);--gse-semantic-background-interactive-ghost-hover:#d5def7;--gse-semantic-background-interactive-ghost-active:#adbff0;--gse-semantic-background-interactive-subtle-default:#ffffff;--gse-semantic-background-interactive-subtle-hover:#d5def7;--gse-semantic-background-interactive-subtle-active:#adbff0;--gse-semantic-background-interactive-danger-default:#e22245;--gse-semantic-background-interactive-danger-hover:#881429;--gse-semantic-background-interactive-danger-active:#440a15;--gse-semantic-background-interactive-custom-orange:#ff8f76;--gse-semantic-background-interactive-custom-coral:#ffbec9;--gse-semantic-background-interactive-custom-pear:#c6dd98;--gse-semantic-background-interactive-custom-mango:#ffd173;--gse-semantic-background-interactive-custom-raspberry:#f5bfeb;--gse-semantic-background-interactive-custom-azure:#adbff0;--gse-semantic-background-interactive-custom-mineral:#bcd6f0;--gse-semantic-background-interactive-custom-island:#81cbe5;--gse-semantic-background-interactive-globalNav-desktop-option-hover:#19327a;--gse-semantic-background-interactive-globalNav-desktop-option-activePanel:#2143a2;--gse-semantic-background-interactive-globalNav-desktop-option-activeSelected:#2954cb;--gse-semantic-background-interactive-globalNav-desktop-return-default:#2143a2;--gse-semantic-background-interactive-globalNav-desktop-return-hover:#2954cb;--gse-semantic-background-interactive-globalNav-desktop-menu-closedHover:#19327a;--gse-semantic-background-interactive-globalNav-desktop-menu-openHover:#19327a;--gse-semantic-background-interactive-globalNav-desktop-newTab-hover:#19327a;--gse-semantic-background-interactive-globalNav-desktop-newTab-selected:#2143a2;--gse-semantic-background-overlay-shroud-default:#263b73a3;--gse-semantic-background-container-page-default:#ffffff;--gse-semantic-background-container-page-tonalSubtle:#f5f6fa;--gse-semantic-background-container-page-tonalMedium:#ebedf5;--gse-semantic-background-container-page-tonalHigh:#d5def7;--gse-semantic-background-container-elevated-default:#ffffff;--gse-semantic-background-container-elevated-hover:#e7e9f9;--gse-semantic-background-container-elevated-active:#d5def7;--gse-semantic-background-container-elevated-error:#f3a7b5;--gse-semantic-background-container-elevated-header:#f5f6fa;--gse-semantic-background-container-elevated-activeSubtle:#d5def7;--gse-semantic-background-container-highConstrast-default:#2a2a2e;--gse-semantic-background-container-highConstrast-hover:#081129;--gse-semantic-background-container-highConstrast-active:#0c193d;--gse-semantic-background-container-chatBubble-agent:#f5f6fa;--gse-semantic-background-container-chatBubble-costumer:#e6f4fa;--gse-semantic-background-container-chatBubble-bot:#ffece8;--gse-semantic-background-container-chatBubble-public:#fff4dc;--gse-semantic-background-container-chatBubble-digitalConsultation:#eee3ff;--gse-semantic-background-container-textHighlight-default:#ffd173;--gse-semantic-background-container-transparent:#fff0;--gse-semantic-background-container-canvas:#f0f1f5;--gse-semantic-background-container-specialAccents-ai-tonalMedium-topLeft:#cdeaf5;--gse-semantic-background-container-specialAccents-ai-tonalMedium-bottomRight:#c5bef1;--gse-semantic-background-container-specialAccents-ai-tonalSubtle-topLeft:#ebf7fb;--gse-semantic-background-container-specialAccents-ai-tonalSubtle-bottomRight:#e8e5fa;--gse-semantic-background-container-globalNav-desktop-topCommandBar:#ffffff;--gse-semantic-background-container-globalNav-desktop-menuPanel-primaryTopLeftValue:#3d538f;--gse-semantic-background-container-globalNav-desktop-menuPanel-primaryBottomRightValue:#263b73;--gse-semantic-background-container-globalNav-desktop-menuPanel-secondaryTopLeftValue:#263b73;--gse-semantic-background-container-globalNav-desktop-menuPanel-secondaryBottomRightValue:#152550;--gse-semantic-background-container-globalNav-mobile-header:#1e1e21;--gse-semantic-background-container-globalNav-mobile-footer:#dfe3ec;--gse-semantic-background-system-error-tonalMedium:#f3a7b5;--gse-semantic-background-system-error-tonalHigh:#e22245;--gse-semantic-background-system-error-tonalSubtle:#f9d3da;--gse-semantic-background-system-warning-tonalMedium:#fce9b2;--gse-semantic-background-system-warning-tonalHigh:#f8c73e;--gse-semantic-background-system-warning-tonalSubtle:#fef4d8;--gse-semantic-background-system-success-tonalMedium:#9de1cd;--gse-semantic-background-system-success-tonalHigh:#09b581;--gse-semantic-background-system-success-tonalSubtle:#cef0e6;--gse-semantic-background-system-info-tonalMedium:#dfe3ec;--gse-semantic-background-system-info-tonalHigh:#3d538f;--gse-semantic-background-system-info-tonalSubtle:#f0f1f5;--gse-semantic-background-system-primary-tonalMedium:#d5def7;--gse-semantic-background-system-primary-tonalHigh:#2954cb;--gse-semantic-background-system-primary-tonalSubtle:#d5def7;--gse-semantic-background-system-customAccents-bold-accent_1:#263b73;--gse-semantic-background-system-customAccents-bold-accent_2:#596ea6;--gse-semantic-background-system-customAccents-bold-accent_3:#54c6ab;--gse-semantic-background-system-customAccents-bold-accent_4:#056385;--gse-semantic-background-system-customAccents-bold-accent_5:#607732;--gse-semantic-background-system-customAccents-bold-accent_6:#467aae;--gse-semantic-background-system-customAccents-bold-accent_7:#8a5ecc;--gse-semantic-background-system-customAccents-bold-accent_8:#89387b;--gse-semantic-background-system-customAccents-bold-accent_9:#ff5c77;--gse-semantic-background-system-customAccents-bold-accent_10:#992910;--gse-semantic-background-system-customAccents-bold-accent_11:#ffc650;--gse-semantic-background-system-customAccents-bold-accent_12:#81cbe5;--gse-semantic-background-system-customAccents-bold-accent_13:#5798d9;--gse-semantic-background-system-customAccents-subtle-accent_1:#9faac6;--gse-semantic-background-system-customAccents-subtle-accent_2:#b2b7c4;--gse-semantic-background-system-customAccents-subtle-accent_3:#cceee6;--gse-semantic-background-system-customAccents-subtle-accent_4:#81cbe5;--gse-semantic-background-system-customAccents-subtle-accent_5:#c6dd98;--gse-semantic-background-system-customAccents-subtle-accent_6:#9ac1e8;--gse-semantic-background-system-customAccents-subtle-accent_7:#cdacff;--gse-semantic-background-system-customAccents-subtle-accent_8:#ef9ee1;--gse-semantic-background-system-customAccents-subtle-accent_9:#ff9dad;--gse-semantic-background-system-customAccents-subtle-accent_10:#ffb5a3;--gse-semantic-background-system-customAccents-subtle-accent_11:#ffdd96;--gse-semantic-background-system-customAccents-subtle-accent_12:#9fd6ea;--gse-semantic-background-system-progressAndLoading-default:#d5def7;--gse-semantic-background-system-progressAndLoading-progressed:#2143a2;--gse-semantic-background-system-status-available:#09b581;--gse-semantic-background-system-status-busy:#e22245;--gse-semantic-background-system-status-away:#f8c73e;--gse-semantic-background-system-status-onQueue:#2143a2;--gse-semantic-background-system-status-offline:#848891;--gse-semantic-background-system-status-outOfOffice:#b74ba4;--gse-semantic-background-system-status-availableReduced:#9de1cd;--gse-semantic-background-system-status-busyReduced:#f3a7b5;--gse-semantic-background-system-status-awayReduced:#fce9b2;--gse-semantic-background-system-status-onQueueReduced:#a6b4da;--gse-semantic-background-system-status-offlineReduced:#cecfd3;--gse-semantic-background-system-status-outOfOfficeReduced:#e2b7db;--gse-semantic-background-system-status-notification:#ff451a;--gse-semantic-background-formControl-clickInput-track:#c1c6d4;--gse-semantic-background-formControl-textInput-track:#ffffff;--gse-semantic-background-formControl-search-matchingText-firstLevel:#81cbe5;--gse-semantic-background-formControl-search-matchingText-subsequentLevel:#9fd6ea;--gse-semantic-foreground-interactive-primary-default:#ffffff;--gse-semantic-foreground-interactive-primary-active:#ffffff;--gse-semantic-foreground-interactive-primary-hover:#ffffff;--gse-semantic-foreground-interactive-secondary-default:#2143a2;--gse-semantic-foreground-interactive-secondary-active:#102251;--gse-semantic-foreground-interactive-secondary-hover:#19327a;--gse-semantic-foreground-interactive-tertiary-default:#2143a2;--gse-semantic-foreground-interactive-tertiary-active:#ffffff;--gse-semantic-foreground-interactive-tertiary-hover:#ffffff;--gse-semantic-foreground-interactive-ghost-default:#2143a2;--gse-semantic-foreground-interactive-ghost-active:#102251;--gse-semantic-foreground-interactive-ghost-hover:#19327a;--gse-semantic-foreground-interactive-subtle-default:#4f5157;--gse-semantic-foreground-interactive-subtle-active:#2a2a2e;--gse-semantic-foreground-interactive-subtle-hover:#3e4044;--gse-semantic-foreground-interactive-danger-default:#ffffff;--gse-semantic-foreground-interactive-danger-active:#ffffff;--gse-semantic-foreground-interactive-danger-hover:#ffffff;--gse-semantic-foreground-interactive-link-default:#2143a2;--gse-semantic-foreground-interactive-link-active:#102251;--gse-semantic-foreground-interactive-link-hover:#19327a;--gse-semantic-foreground-interactive-link-visited:#3d538f;--gse-semantic-foreground-interactive-indicator-default:#5476d5;--gse-semantic-foreground-interactive-globalNav-desktop-level1-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-activePanel:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-activeSelected:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-disabled:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-menu-closedDefault:#2143a2;--gse-semantic-foreground-interactive-globalNav-desktop-menu-closedHover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-menu-openDefault:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-menu-openHover:#d5def7;--gse-semantic-foreground-interactive-globalNav-desktop-level2-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level2-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level2-selected:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level2-disabled:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-newTab-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-newTab-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-newTab-selected:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-return-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-return-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-return-selected:#ffffff;--gse-semantic-foreground-container-highEmphasis:#2a2a2e;--gse-semantic-foreground-container-midEmphasis:#4f5157;--gse-semantic-foreground-container-lowEmphasis:#6a6d75;--gse-semantic-foreground-container-highContrast-highEmphasis:#ffffff;--gse-semantic-foreground-container-highContrast-midEmphasis:#dce1ed;--gse-semantic-foreground-container-highContrast-lowEmphasis:#c1c6d4;--gse-semantic-foreground-container-specialAccents-ai:#1589b2;--gse-semantic-foreground-container-specialAccents-brand:#ff451a;--gse-semantic-foreground-container-specialAccents-brandSecondary:#141929;--gse-semantic-foreground-container-specialAccents-aiGradient-topLeft:#28afe0;--gse-semantic-foreground-container-specialAccents-aiGradient-bottomRight:#6e5ddb;--gse-semantic-foreground-container-specialAccents-globalNav:#152550;--gse-semantic-foreground-system-customAccents-light:#ffffff;--gse-semantic-foreground-system-customAccents-dark:#2a2a2e;--gse-semantic-foreground-system-progressAndLoading-default:#3e4044;--gse-semantic-foreground-system-progressAndLoading-progressed:#ffffff;--gse-semantic-foreground-system-progressAndLoading-completed:#2143a2;--gse-semantic-foreground-system-progressAndLoading-incompleted:#c1c6d4;--gse-semantic-foreground-system-info-highEmphasis:#2a2a2e;--gse-semantic-foreground-system-info-accent:#3d538f;--gse-semantic-foreground-system-success-highEmphasis:#2a2a2e;--gse-semantic-foreground-system-success-accent:#056d4d;--gse-semantic-foreground-system-warning-highEmphasis:#2a2a2e;--gse-semantic-foreground-system-warning-accent:#9a7b25;--gse-semantic-foreground-system-warning-highEmphasisInverse:#2a2a2e;--gse-semantic-foreground-system-error-highEmphasis:#2a2a2e;--gse-semantic-foreground-system-error-accent:#b51b37;--gse-semantic-foreground-system-icon-default:#4f5157;--gse-semantic-foreground-system-indicators-positive:#056d4d;--gse-semantic-foreground-system-indicators-negative:#b51b37;--gse-semantic-foreground-system-indicators-neutral:#6a6d75;--gse-semantic-foreground-formControl-helpText-default:#6a6d75;--gse-semantic-foreground-formControl-helpText-error:#b51b37;--gse-semantic-foreground-formControl-textInput-placeholder:#6a6d75;--gse-semantic-foreground-formControl-textInput-populated:#2a2a2e;--gse-semantic-foreground-formControl-textInput-icon:#6a6d75;--gse-semantic-foreground-formControl-clickInput-enabled:#a3a8b5;--gse-semantic-foreground-formControl-clickInput-selected:#2143a2;--gse-semantic-foreground-formControl-clickInput-hover:#19327a;--gse-semantic-foreground-formControl-clickInput-active:#102251;--gse-semantic-foreground-formControl-clickInput-error:#b51b37;--gse-semantic-foreground-formControl-label-default:#2a2a2e;--gse-semantic-foreground-formControl-label-requiredAccent:#b51b37;--gse-semantic-foreground-formControl-label-optionalAccent:#4f5157;--gse-semantic-foreground-formControl-label-tooltip:#4f5157;--gse-semantic-foreground-formControl-search-matchingText:#2a2a2e;--gse-semantic-border-focus:#5476d5;--gse-semantic-border-container-divider:#dce1ed;--gse-semantic-border-container-edges-defaultLight:#bfc6d9;--gse-semantic-border-container-edges-default:#c1c6d4;--gse-semantic-border-container-edges-hover:#5476d5;--gse-semantic-border-container-edges-error:#e22245;--gse-semantic-border-container-edges-enabled:#2143a2;--gse-semantic-border-container-edges-active:#19327a;--gse-semantic-border-container-edges-highEmphasis:#3e4044;--gse-semantic-border-container-edges-dataTable-default:#cad1e1;--gse-semantic-border-container-edges-lowEmphasis:#6a6d75;--gse-semantic-border-container-edges-midEmphasis:#829ce5;--gse-semantic-border-container-highConstrast-default:#6a6d75;--gse-semantic-border-container-highConstrast-enabled:#2143a2;--gse-semantic-border-container-highConstrast-hover:#102251;--gse-semantic-border-container-highConstrast-active:#19327a;--gse-semantic-border-container-specialAccents-ai-topLeft:#28afe0;--gse-semantic-border-container-specialAccents-ai-bottomRight:#8b7de2;--gse-semantic-border-container-globalNav-treeView-bar:#3d538f;--gse-semantic-border-container-globalNav-topCommandBar-divider:#cad1e1;--gse-semantic-border-container-globalNav-panel-divider:#cad1e100;--gse-semantic-border-container-globalNav-menuButton-closedHover:#19327a;--gse-semantic-border-container-globalNav-sideMenu-divider:rgba(0, 0, 0, 0);--gse-semantic-border-system-info:#bfc6d9;--gse-semantic-border-system-warning:#fce9b2;--gse-semantic-border-system-success:#9de1cd;--gse-semantic-border-system-error:#f3a7b5;--gse-semantic-border-system-primary:#829ce5;--gse-semantic-border-interactive-primary-divider:#ffffff;--gse-semantic-border-interactive-secondary-divider:#ffffff;--gse-semantic-border-interactive-tertiary-divider:#2143a2;--gse-semantic-border-interactive-danger-divider:#ffffff;--gse-semantic-border-formControl-textInput-default:#a3a8b5;--gse-semantic-border-formControl-textInput-hover:#19327a;--gse-semantic-border-formControl-textInput-active:#102251;--gse-semantic-border-formControl-textInput-error:#e22245;--gse-semantic-container-lg-boxShadow:0 0 8px 1px #2a2a2e26;--gse-semantic-container-md-boxShadow:0 0 6px 1px #2a2a2e26;--gse-semantic-container-sm-boxShadow:0 0 4px 1px #2a2a2e26;--gse-semantic-effects-boxShadow:#2a2a2e26;--gse-semantic-charts-categoricalData-category1-default:#056385;--gse-semantic-charts-categoricalData-category1-shading:#82b1c2;--gse-semantic-charts-categoricalData-category2-default:#5798d9;--gse-semantic-charts-categoricalData-category2-shading:#abccec;--gse-semantic-charts-categoricalData-category3-default:#ac75ff;--gse-semantic-charts-categoricalData-category3-shading:#d5baff;--gse-semantic-charts-categoricalData-category4-default:#89387b;--gse-semantic-charts-categoricalData-category4-shading:#c49bbd;--gse-semantic-charts-categoricalData-category5-default:#ff5c77;--gse-semantic-charts-categoricalData-category5-shading:#ffadbb;--gse-semantic-charts-categoricalData-category6-default:#ffb5a3;--gse-semantic-charts-categoricalData-category6-shading:#ffdad1;--gse-semantic-charts-categoricalData-category7-default:#ffc650;--gse-semantic-charts-categoricalData-category7-shading:#ffe3a7;--gse-semantic-charts-categoricalData-category8-default:#c6dd98;--gse-semantic-charts-categoricalData-category8-shading:#e3eecc;--gse-semantic-charts-categoricalData-category9-default:#54c6ab;--gse-semantic-charts-categoricalData-category9-shading:#aae3d5;--gse-semantic-charts-categoricalData-category10-default:#263b73;--gse-semantic-charts-categoricalData-category10-shading:#939db9;--gse-semantic-charts-categoricalData-subtle-default:#cad1e1;--gse-semantic-charts-numericalData-singleColor-level1:#cdeaf5;--gse-semantic-charts-numericalData-singleColor-level2:#9fd6ea;--gse-semantic-charts-numericalData-singleColor-level3:#81cbe5;--gse-semantic-charts-numericalData-singleColor-level4:#53bee5;--gse-semantic-charts-numericalData-singleColor-level5:#28afe0;--gse-semantic-charts-numericalData-singleColor-level6:#1589b2;--gse-semantic-charts-numericalData-singleColor-level7:#056385;--gse-semantic-charts-numericalData-singleColor-level8:#04445c;--gse-semantic-charts-numericalData-singleColor-level9:#002533;--gse-semantic-charts-numericalData-singleColor-level10:#052a38;--gse-semantic-charts-numericalData-multiColor-green:#81cbe5;--gse-semantic-charts-numericalData-multiColor-red:#ff9dad;--gse-semantic-charts-numericalData-multiColor-yellow:#ffdd96;--gse-semantic-charts-numericalData-highEmphasisInverse:#ffffff;--gse-semantic-charts-numericalData-highEmphasis:#2a2a2e;--gse-semantic-charts-foreground-highEmphasis:#2a2a2e;--gse-semantic-charts-foreground-highEmphasisInverse:#ffffff;--gse-semantic-charts-foreground-midEmphasis:#4f5157;--gse-semantic-charts-border-axis:#b2b7c4;--gse-semantic-charts-border-grid-default:#ebedf5;--gse-semantic-charts-border-grid-hover:#c1c6d4;--gse-semantic-charts-targetLine-default:#ff8f76;--gse-semantic-charts-pointFill-default:#ffffff;--gse-semantic-charts-stroke-default:#ffffff;--gse-semantic-charts-background-placeholder-default:#ebedf5;--gse-semantic-charts-track-default:#ebedf5;--gse-semantic-charts-sparkline-mono:#2143a2;--gse-semantic-charts-sparkline-negative:#b51b37;--gse-semantic-charts-sparkline-positive:#056d4d;--gse-semantic-charts-sparkline-neutral:#9faac6;--gse-semantic-charts-sparkline-trendline:#cad1e1}[flare-mode=dark]{--gse-semantic-background-interactive-primary-default:#2143a2;--gse-semantic-background-interactive-primary-hover:#19327a;--gse-semantic-background-interactive-primary-active:#102251;--gse-semantic-background-interactive-secondary-default:#465066;--gse-semantic-background-interactive-secondary-hover:#475675;--gse-semantic-background-interactive-secondary-active:#354a72;--gse-semantic-background-interactive-tertiary-default:rgba(0, 0, 0, 0);--gse-semantic-background-interactive-tertiary-hover:#19327a;--gse-semantic-background-interactive-tertiary-active:#102251;--gse-semantic-background-interactive-ghost-default:rgba(0, 0, 0, 0);--gse-semantic-background-interactive-ghost-hover:#475675;--gse-semantic-background-interactive-ghost-active:#354a72;--gse-semantic-background-interactive-subtle-default:#131315;--gse-semantic-background-interactive-subtle-hover:#475675;--gse-semantic-background-interactive-subtle-active:#354a72;--gse-semantic-background-interactive-danger-default:#881429;--gse-semantic-background-interactive-danger-hover:#e22245;--gse-semantic-background-interactive-danger-active:#440a15;--gse-semantic-background-interactive-custom-orange:#992910;--gse-semantic-background-interactive-custom-coral:#662530;--gse-semantic-background-interactive-custom-pear:#404f22;--gse-semantic-background-interactive-custom-mango:#664f20;--gse-semantic-background-interactive-custom-raspberry:#5c2652;--gse-semantic-background-interactive-custom-azure:#102251;--gse-semantic-background-interactive-custom-mineral:#233d57;--gse-semantic-background-interactive-custom-island:#003447;--gse-semantic-background-interactive-globalNav-desktop-option-hover:#0c193d;--gse-semantic-background-interactive-globalNav-desktop-option-activePanel:#102251;--gse-semantic-background-interactive-globalNav-desktop-option-activeSelected:#19327a;--gse-semantic-background-interactive-globalNav-desktop-return-default:#19327a;--gse-semantic-background-interactive-globalNav-desktop-return-hover:#102251;--gse-semantic-background-interactive-globalNav-desktop-menu-closedHover:#0c193d;--gse-semantic-background-interactive-globalNav-desktop-menu-openHover:#0c193d;--gse-semantic-background-interactive-globalNav-desktop-newTab-hover:#0c193d;--gse-semantic-background-interactive-globalNav-desktop-newTab-selected:#102251;--gse-semantic-background-overlay-shroud-default:#040814a3;--gse-semantic-background-container-page-default:#2a2a2e;--gse-semantic-background-container-page-tonalSubtle:#1e1e21;--gse-semantic-background-container-page-tonalMedium:#131315;--gse-semantic-background-container-page-tonalHigh:#475675;--gse-semantic-background-container-elevated-default:#2a2a2e;--gse-semantic-background-container-elevated-hover:#465066;--gse-semantic-background-container-elevated-active:#475675;--gse-semantic-background-container-elevated-error:#440a15;--gse-semantic-background-container-elevated-header:#3e4044;--gse-semantic-background-container-elevated-activeSubtle:#475675;--gse-semantic-background-container-highConstrast-default:#ffffff;--gse-semantic-background-container-highConstrast-hover:#d5def7;--gse-semantic-background-container-highConstrast-active:#adbff0;--gse-semantic-background-container-chatBubble-agent:#131315;--gse-semantic-background-container-chatBubble-costumer:#002533;--gse-semantic-background-container-chatBubble-bot:#2f1007;--gse-semantic-background-container-chatBubble-public:#3d300c;--gse-semantic-background-container-chatBubble-digitalConsultation:#282136;--gse-semantic-background-container-textHighlight-default:#664f20;--gse-semantic-background-container-transparent:#2a2a2e00;--gse-semantic-background-container-canvas:#141c34;--gse-semantic-background-container-specialAccents-ai-tonalMedium-topLeft:#056385;--gse-semantic-background-container-specialAccents-ai-tonalMedium-bottomRight:#443989;--gse-semantic-background-container-specialAccents-ai-tonalSubtle-topLeft:#313644;--gse-semantic-background-container-specialAccents-ai-tonalSubtle-bottomRight:#2f2f44;--gse-semantic-background-container-globalNav-desktop-topCommandBar:#1e1e21;--gse-semantic-background-container-globalNav-desktop-menuPanel-primaryTopLeftValue:#141c34;--gse-semantic-background-container-globalNav-desktop-menuPanel-primaryBottomRightValue:#141929;--gse-semantic-background-container-globalNav-desktop-menuPanel-secondaryTopLeftValue:#141929;--gse-semantic-background-container-globalNav-desktop-menuPanel-secondaryBottomRightValue:#131315;--gse-semantic-background-container-globalNav-mobile-header:#1e1e21;--gse-semantic-background-container-globalNav-mobile-footer:#141c34;--gse-semantic-background-system-error-tonalMedium:#440a15;--gse-semantic-background-system-error-tonalHigh:#881429;--gse-semantic-background-system-error-tonalSubtle:#2d070e;--gse-semantic-background-system-warning-tonalMedium:#6c5619;--gse-semantic-background-system-warning-tonalHigh:#c9a132;--gse-semantic-background-system-warning-tonalSubtle:#3d300c;--gse-semantic-background-system-success-tonalMedium:#044834;--gse-semantic-background-system-success-tonalHigh:#056d4d;--gse-semantic-background-system-success-tonalSubtle:#02241a;--gse-semantic-background-system-info-tonalMedium:#263b73;--gse-semantic-background-system-info-tonalHigh:#3d538f;--gse-semantic-background-system-info-tonalSubtle:#141c34;--gse-semantic-background-system-primary-tonalMedium:#102251;--gse-semantic-background-system-primary-tonalHigh:#2143a2;--gse-semantic-background-system-primary-tonalSubtle:#102251;--gse-semantic-background-system-customAccents-bold-accent_1:#3d538f;--gse-semantic-background-system-customAccents-bold-accent_2:#6a6d75;--gse-semantic-background-system-customAccents-bold-accent_3:#327767;--gse-semantic-background-system-customAccents-bold-accent_4:#056385;--gse-semantic-background-system-customAccents-bold-accent_5:#607732;--gse-semantic-background-system-customAccents-bold-accent_6:#233d57;--gse-semantic-background-system-customAccents-bold-accent_7:#674699;--gse-semantic-background-system-customAccents-bold-accent_8:#89387b;--gse-semantic-background-system-customAccents-bold-accent_9:#993747;--gse-semantic-background-system-customAccents-bold-accent_10:#992910;--gse-semantic-background-system-customAccents-bold-accent_11:#664f20;--gse-semantic-background-system-customAccents-bold-accent_12:#117fa7;--gse-semantic-background-system-customAccents-bold-accent_13:#345b82;--gse-semantic-background-system-customAccents-subtle-accent_1:#152550;--gse-semantic-background-system-customAccents-subtle-accent_2:#3e4044;--gse-semantic-background-system-customAccents-subtle-accent_3:#193b33;--gse-semantic-background-system-customAccents-subtle-accent_4:#003447;--gse-semantic-background-system-customAccents-subtle-accent_5:#303b19;--gse-semantic-background-system-customAccents-subtle-accent_6:#1a2e41;--gse-semantic-background-system-customAccents-subtle-accent_7:#34234d;--gse-semantic-background-system-customAccents-subtle-accent_8:#451c3e;--gse-semantic-background-system-customAccents-subtle-accent_9:#4d1c24;--gse-semantic-background-system-customAccents-subtle-accent_10:#661c0a;--gse-semantic-background-system-customAccents-subtle-accent_11:#4d3b18;--gse-semantic-background-system-customAccents-subtle-accent_12:#04445c;--gse-semantic-background-system-progressAndLoading-default:#465066;--gse-semantic-background-system-progressAndLoading-progressed:#5476d5;--gse-semantic-background-system-status-available:#09b581;--gse-semantic-background-system-status-busy:#e22245;--gse-semantic-background-system-status-away:#f8c73e;--gse-semantic-background-system-status-onQueue:#2954cb;--gse-semantic-background-system-status-offline:#848891;--gse-semantic-background-system-status-outOfOffice:#b74ba4;--gse-semantic-background-system-status-availableReduced:#1d624f;--gse-semantic-background-system-status-busyReduced:#742737;--gse-semantic-background-system-status-awayReduced:#7c6934;--gse-semantic-background-system-status-onQueueReduced:#2a3b6d;--gse-semantic-background-system-status-offlineReduced:#4e5056;--gse-semantic-background-system-status-outOfOfficeReduced:#62375d;--gse-semantic-background-system-status-notification:#ff451a;--gse-semantic-background-formControl-clickInput-track:#848891;--gse-semantic-background-formControl-textInput-track:#1e1e21;--gse-semantic-background-formControl-search-matchingText-firstLevel:#81cbe5;--gse-semantic-background-formControl-search-matchingText-subsequentLevel:#9fd6ea;--gse-semantic-foreground-interactive-primary-default:#ffffff;--gse-semantic-foreground-interactive-primary-active:#ffffff;--gse-semantic-foreground-interactive-primary-hover:#ffffff;--gse-semantic-foreground-interactive-secondary-default:#ffffff;--gse-semantic-foreground-interactive-secondary-active:#ffffff;--gse-semantic-foreground-interactive-secondary-hover:#ffffff;--gse-semantic-foreground-interactive-tertiary-default:#adbff0;--gse-semantic-foreground-interactive-tertiary-active:#ffffff;--gse-semantic-foreground-interactive-tertiary-hover:#d5def7;--gse-semantic-foreground-interactive-ghost-default:#adbff0;--gse-semantic-foreground-interactive-ghost-active:#ffffff;--gse-semantic-foreground-interactive-ghost-hover:#d5def7;--gse-semantic-foreground-interactive-subtle-default:#b2b7c4;--gse-semantic-foreground-interactive-subtle-active:#ffffff;--gse-semantic-foreground-interactive-subtle-hover:#cad1e1;--gse-semantic-foreground-interactive-danger-default:#ffffff;--gse-semantic-foreground-interactive-danger-active:#ffffff;--gse-semantic-foreground-interactive-danger-hover:#ffffff;--gse-semantic-foreground-interactive-link-default:#829ce5;--gse-semantic-foreground-interactive-link-active:#d5def7;--gse-semantic-foreground-interactive-link-hover:#adbff0;--gse-semantic-foreground-interactive-link-visited:#808db2;--gse-semantic-foreground-interactive-indicator-default:#5476d5;--gse-semantic-foreground-interactive-globalNav-desktop-level1-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-activePanel:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-activeSelected:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level1-disabled:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-menu-closedDefault:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-menu-closedHover:#d5def7;--gse-semantic-foreground-interactive-globalNav-desktop-menu-openDefault:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-menu-openHover:#d5def7;--gse-semantic-foreground-interactive-globalNav-desktop-level2-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level2-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level2-selected:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-level2-disabled:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-newTab-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-newTab-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-newTab-selected:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-return-default:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-return-hover:#ffffff;--gse-semantic-foreground-interactive-globalNav-desktop-return-selected:#ffffff;--gse-semantic-foreground-container-highEmphasis:#ffffff;--gse-semantic-foreground-container-midEmphasis:#b2b7c4;--gse-semantic-foreground-container-lowEmphasis:#c1c6d4;--gse-semantic-foreground-container-highContrast-highEmphasis:#1e1e21;--gse-semantic-foreground-container-highContrast-midEmphasis:#3e4044;--gse-semantic-foreground-container-highContrast-lowEmphasis:#4f5157;--gse-semantic-foreground-container-specialAccents-ai:#1589b2;--gse-semantic-foreground-container-specialAccents-brand:#ff451a;--gse-semantic-foreground-container-specialAccents-aiGradient-topLeft:#9fd6ea;--gse-semantic-foreground-container-specialAccents-aiGradient-bottomRight:#a89ee9;--gse-semantic-foreground-container-specialAccents-brandSecondary:#ffffff;--gse-semantic-foreground-container-specialAccents-globalNav:#ffffff;--gse-semantic-foreground-system-customAccents-light:#ffffff;--gse-semantic-foreground-system-customAccents-dark:#ffffff;--gse-semantic-foreground-system-progressAndLoading-default:#cad1e1;--gse-semantic-foreground-system-progressAndLoading-progressed:#ffffff;--gse-semantic-foreground-system-progressAndLoading-completed:#ffffff;--gse-semantic-foreground-system-progressAndLoading-incompleted:#c1c6d4;--gse-semantic-foreground-system-info-highEmphasis:#ffffff;--gse-semantic-foreground-system-info-accent:#596ea6;--gse-semantic-foreground-system-success-highEmphasis:#ffffff;--gse-semantic-foreground-system-success-accent:#09b581;--gse-semantic-foreground-system-warning-highEmphasis:#ffffff;--gse-semantic-foreground-system-warning-highEmphasisInverse:#2a2a2e;--gse-semantic-foreground-system-warning-accent:#f8c73e;--gse-semantic-foreground-system-error-highEmphasis:#ffffff;--gse-semantic-foreground-system-error-accent:#e84e6a;--gse-semantic-foreground-system-icon-default:#b2b7c4;--gse-semantic-foreground-system-indicators-positive:#09b581;--gse-semantic-foreground-system-indicators-negative:#e84e6a;--gse-semantic-foreground-system-indicators-neutral:#c1c6d4;--gse-semantic-foreground-formControl-helpText-default:#c1c6d4;--gse-semantic-foreground-formControl-helpText-error:#e84e6a;--gse-semantic-foreground-formControl-textInput-placeholder:#c1c6d4;--gse-semantic-foreground-formControl-textInput-populated:#ffffff;--gse-semantic-foreground-formControl-textInput-icon:#c1c6d4;--gse-semantic-foreground-formControl-clickInput-enabled:#848891;--gse-semantic-foreground-formControl-clickInput-selected:#5476d5;--gse-semantic-foreground-formControl-clickInput-hover:#829ce5;--gse-semantic-foreground-formControl-clickInput-active:#adbff0;--gse-semantic-foreground-formControl-clickInput-error:#e84e6a;--gse-semantic-foreground-formControl-label-default:#ffffff;--gse-semantic-foreground-formControl-label-requiredAccent:#e84e6a;--gse-semantic-foreground-formControl-label-optionalAccent:#b2b7c4;--gse-semantic-foreground-formControl-label-tooltip:#b2b7c4;--gse-semantic-foreground-formControl-search-matchingText:#2a2a2e;--gse-semantic-border-focus:#5476d5;--gse-semantic-border-container-divider:#4f5157;--gse-semantic-border-container-edges-default:#4f5157;--gse-semantic-border-container-edges-hover:#2954cb;--gse-semantic-border-container-edges-error:#881429;--gse-semantic-border-container-edges-enabled:#2143a2;--gse-semantic-border-container-edges-active:#5476d5;--gse-semantic-border-container-edges-highEmphasis:#cad1e1;--gse-semantic-border-container-edges-dataTable-default:#3e4044;--gse-semantic-border-container-edges-lowEmphasis:#6a6d75;--gse-semantic-border-container-edges-midEmphasis:#829ce5;--gse-semantic-border-container-highConstrast-default:#c1c6d4;--gse-semantic-border-container-highConstrast-enabled:#2143a2;--gse-semantic-border-container-highConstrast-hover:#19327a;--gse-semantic-border-container-highConstrast-active:#5476d5;--gse-semantic-border-container-specialAccents-ai-topLeft:#056385;--gse-semantic-border-container-specialAccents-ai-bottomRight:#6e5ddb;--gse-semantic-border-container-globalNav-treeView-bar:#263b73;--gse-semantic-border-container-globalNav-topCommandBar-divider:#3e4044;--gse-semantic-border-container-globalNav-panel-divider:#3e4044;--gse-semantic-border-container-globalNav-menuButton-closedHover:#d5def7;--gse-semantic-border-container-globalNav-sideMenu-divider:#3e4044;--gse-semantic-border-system-info:#263b73;--gse-semantic-border-system-warning:#6c5619;--gse-semantic-border-system-success:#044834;--gse-semantic-border-system-error:#5a0e1c;--gse-semantic-border-system-primary:#102251;--gse-semantic-border-interactive-primary-divider:#1e1e21;--gse-semantic-border-interactive-secondary-divider:#1e1e21;--gse-semantic-border-interactive-tertiary-divider:#adbff0;--gse-semantic-border-interactive-danger-divider:#1e1e21;--gse-semantic-border-formControl-textInput-default:#848891;--gse-semantic-border-formControl-textInput-hover:#829ce5;--gse-semantic-border-formControl-textInput-active:#adbff0;--gse-semantic-border-formControl-textInput-error:#e22245;--gse-semantic-container-lg-boxShadow:0 0 8px 1px #000000b3;--gse-semantic-container-md-boxShadow:0 0 6px 1px #000000b3;--gse-semantic-container-sm-boxShadow:0 0 4px 1px #000000b3;--gse-semantic-effects-boxShadow:#000000b3;--gse-semantic-charts-categoricalData-category1-default:#53bee5;--gse-semantic-charts-categoricalData-category1-shading:#4793b0;--gse-semantic-charts-categoricalData-category2-default:#467aae;--gse-semantic-charts-categoricalData-category2-shading:#3e6389;--gse-semantic-charts-categoricalData-category3-default:#ac75ff;--gse-semantic-charts-categoricalData-category3-shading:#865fc2;--gse-semantic-charts-categoricalData-category4-default:#e55ecd;--gse-semantic-charts-categoricalData-category4-shading:#af4f9f;--gse-semantic-charts-categoricalData-category5-default:#ff5c77;--gse-semantic-charts-categoricalData-category5-shading:#c14d62;--gse-semantic-charts-categoricalData-category6-default:#cc3715;--gse-semantic-charts-categoricalData-category6-shading:#9d331c;--gse-semantic-charts-categoricalData-category7-default:#ffc650;--gse-semantic-charts-categoricalData-category7-shading:#c19946;--gse-semantic-charts-categoricalData-category8-default:#a0c654;--gse-semantic-charts-categoricalData-category8-shading:#7e9949;--gse-semantic-charts-categoricalData-category9-default:#54c6ab;--gse-semantic-charts-categoricalData-category9-shading:#489987;--gse-semantic-charts-categoricalData-category10-default:#3d538f;--gse-semantic-charts-categoricalData-category10-shading:#374773;--gse-semantic-charts-categoricalData-subtle-default:#848891;--gse-semantic-charts-numericalData-singleColor-level1:#e6f4fa;--gse-semantic-charts-numericalData-singleColor-level2:#cdeaf5;--gse-semantic-charts-numericalData-singleColor-level3:#9fd6ea;--gse-semantic-charts-numericalData-singleColor-level4:#81cbe5;--gse-semantic-charts-numericalData-singleColor-level5:#53bee5;--gse-semantic-charts-numericalData-singleColor-level6:#28afe0;--gse-semantic-charts-numericalData-singleColor-level7:#1589b2;--gse-semantic-charts-numericalData-singleColor-level8:#056385;--gse-semantic-charts-numericalData-singleColor-level9:#04445c;--gse-semantic-charts-numericalData-singleColor-level10:#003447;--gse-semantic-charts-numericalData-multiColor-green:#53bee5;--gse-semantic-charts-numericalData-multiColor-red:#ff7d92;--gse-semantic-charts-numericalData-multiColor-yellow:#ffd173;--gse-semantic-charts-numericalData-highEmphasis:#2a2a2e;--gse-semantic-charts-numericalData-highEmphasisInverse:#ffffff;--gse-semantic-charts-foreground-highEmphasis:#ffffff;--gse-semantic-charts-foreground-highEmphasisInverse:#2a2a2e;--gse-semantic-charts-foreground-midEmphasis:#c1c6d4;--gse-semantic-charts-border-axis:#a3a8b5;--gse-semantic-charts-border-grid-default:#3e4044;--gse-semantic-charts-border-grid-hover:#848891;--gse-semantic-charts-targetLine-default:#ff8f76;--gse-semantic-charts-pointFill-default:#1e1e21;--gse-semantic-charts-stroke-default:#1e1e21;--gse-semantic-charts-background-placeholder-default:#3e4044;--gse-semantic-charts-track-default:#3e4044;--gse-semantic-charts-sparkline-mono:#5476d5;--gse-semantic-charts-sparkline-negative:#e84e6a;--gse-semantic-charts-sparkline-positive:#09b581;--gse-semantic-charts-sparkline-neutral:#808db2;--gse-semantic-charts-sparkline-trendline:#6a6d75}:root{--gse-ui-color-focus:#5476d5;--gse-ui-formControl-input-contentText-fontFamily:\"Noto Sans\";--gse-ui-formControl-input-contentText-fontWeight:400;--gse-ui-formControl-input-contentText-fontSize:12px;--gse-ui-formControl-input-contentText-lineHeight:18px;--gse-ui-formControl-input-default-border-color:#a3a8b5;--gse-ui-formControl-input-default-border-width:1px;--gse-ui-formControl-input-default-border-style:solid;--gse-ui-formControl-input-hover-border-color:#19327a;--gse-ui-formControl-input-hover-border-width:1px;--gse-ui-formControl-input-hover-border-style:solid;--gse-ui-formControl-input-active-border-color:#102251;--gse-ui-formControl-input-active-border-width:1px;--gse-ui-formControl-input-active-border-style:solid;--gse-ui-formControl-input-error-border-color:#e22245;--gse-ui-formControl-input-error-border-width:1px;--gse-ui-formControl-input-error-border-style:solid;--gse-ui-formControl-input-disabled-border-color:#a3a8b5;--gse-ui-formControl-input-disabled-border-width:1px;--gse-ui-formControl-input-disabled-border-style:solid;--gse-ui-formControl-input-disabled-opacity:0.5;--gse-ui-formControl-input-borderRadius:4px;--gse-ui-formControl-input-backgroundColor:#ffffff;--gse-ui-formControl-input-placeholderColor:#6a6d75;--gse-ui-formControl-input-suggestionColor:#6a6d75;--gse-ui-formControl-input-populatedColor:#2a2a2e;--gse-ui-formControl-input-inputClearable-inputClearableColor:#6a6d75;--gse-ui-formControl-input-inputClearable-size:16px;--gse-ui-formControl-input-gap:12px;--gse-ui-formControl-input-top:8px;--gse-ui-formControl-input-padding:8px 12px;--gse-ui-formControl-input-prefixSufix-text-fontFamily:\"Noto Sans\";--gse-ui-formControl-input-prefixSufix-text-fontWeight:700;--gse-ui-formControl-input-prefixSufix-text-fontSize:14px;--gse-ui-formControl-input-prefixSufix-text-lineHeight:20px;--gse-ui-formControl-input-prefixSufix-height:32px;--gse-ui-formControl-input-prefixSufix-defaultColor:#6a6d75;--gse-ui-formControl-input-textfield-height:32px;--gse-ui-formControl-input-textfield-minWidth:48px;--gse-ui-formControl-input-colorPicker-size:32px;--gse-ui-formControl-input-inputIcon-size:16px;--gse-ui-formControl-input-inputIcon-defaultColor:#2a2a2e;--gse-ui-formControl-input-inputIcon-iconEndColor:#6a6d75;--gse-ui-formControl-input-focusRing-defaultColor:#5476d5;--gse-ui-formControl-input-textarea-height:98px;--gse-ui-formControl-input-focus-border-color:#5476d5;--gse-ui-formControl-input-focus-border-width:2px;--gse-ui-formControl-input-focus-border-style:solid;--gse-ui-formControl-input-spinbuttonIcon-size:16px;--gse-ui-formControl-input-focusSelection-backgroundColor:#5476d5;--gse-ui-formControl-label-padding:0 0 8px 0;--gse-ui-formControl-label-text-fontFamily:\"Noto Sans\";--gse-ui-formControl-label-text-fontWeight:400;--gse-ui-formControl-label-text-fontSize:12px;--gse-ui-formControl-label-text-lineHeight:18px;--gse-ui-formControl-label-textBold-fontFamily:\"Noto Sans\";--gse-ui-formControl-label-textBold-fontWeight:600;--gse-ui-formControl-label-textBold-fontSize:12px;--gse-ui-formControl-label-textBold-lineHeight:18px;--gse-ui-formControl-label-labelColor:#2a2a2e;--gse-ui-formControl-label-indicator-text-fontFamily:\"Noto Sans\";--gse-ui-formControl-label-indicator-text-fontWeight:400;--gse-ui-formControl-label-indicator-text-fontSize:12px;--gse-ui-formControl-label-indicator-text-lineHeight:18px;--gse-ui-formControl-label-indicator-requiredColor:#b51b37;--gse-ui-formControl-label-indicator-optionalColor:#4f5157;--gse-ui-formControl-label-iconSize:16px;--gse-ui-formControl-label-tooltipTrigger-color:#4f5157;--gse-ui-formControl-label-tooltipTrigger-borderRadius:2px;--gse-ui-formControl-formField-gap:4px;--gse-ui-formControl-group-gapItems:8px;--gse-ui-formControl-helper-gap:4px;--gse-ui-formControl-helper-helperText-fontFamily:\"Noto Sans\";--gse-ui-formControl-helper-helperText-fontWeight:400;--gse-ui-formControl-helper-helperText-fontSize:12px;--gse-ui-formControl-helper-helperText-lineHeight:18px;--gse-ui-formControl-helper-padding:8px 0 0 0;--gse-ui-formControl-helper-icon-padding:1rem;--gse-ui-formControl-helper-paddingSmall:4px 0 0 0;--gse-ui-formControl-helper-errorPadding:4px 0 0 0;--gse-ui-formControl-helper-defaultColor:#6a6d75;--gse-ui-formControl-helper-errorColor:#b51b37;--gse-ui-formControl-helper-iconSize:16px;--gse-ui-formControl-spinButton-gap:8px;--gse-ui-formControl-spinner-track:#2143a2;--gse-ui-formControl-spinner-errorColor:#d5def7;--gse-ui-formControl-textarea-padding:8px;--gse-ui-formControl-focusRing-borderRadius:4px;--gse-ui-calendarMenu-month-defaultText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-month-defaultText-fontWeight:400;--gse-ui-calendarMenu-month-defaultText-fontSize:12px;--gse-ui-calendarMenu-month-defaultText-lineHeight:18px;--gse-ui-calendarMenu-month-currentText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-month-currentText-fontWeight:700;--gse-ui-calendarMenu-month-currentText-fontSize:12px;--gse-ui-calendarMenu-month-currentText-lineHeight:18px;--gse-ui-calendarMenu-month-default-foregroundColor:#2a2a2e;--gse-ui-calendarMenu-month-single-header-textWidth:154px;--gse-ui-calendarMenu-month-single-header-width:218px;--gse-ui-calendarMenu-month-single-header-height:48px;--gse-ui-calendarMenu-month-monthCell-width:66px;--gse-ui-calendarMenu-month-monthCell-height:48px;--gse-ui-calendarMenu-month-headerText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-month-headerText-fontWeight:700;--gse-ui-calendarMenu-month-headerText-fontSize:16px;--gse-ui-calendarMenu-month-headerText-lineHeight:24px;--gse-ui-calendarMenu-month-range-vertical-width:272px;--gse-ui-calendarMenu-month-range-vertical-height:652px;--gse-ui-calendarMenu-month-range-timePickerOn-height:72px;--gse-ui-calendarMenu-month-focusBorderRadius:20px;--gse-ui-calendarMenu-month-borderRadius:16px;--gse-ui-calendarMenu-month-calendarButton-focusBorderRadius:4px;--gse-ui-calendarMenu-month-selected-foregroundColor:#ffffff;--gse-ui-calendarMenu-month-selected-backgroundColor:#2143a2;--gse-ui-calendarMenu-month-selected-hoverBackgroundColor:#19327a;--gse-ui-calendarMenu-month-hover-backgroundColor:#e7e9f9;--gse-ui-calendarMenu-day-range-width:16px;--gse-ui-calendarMenu-day-range-height:32px;--gse-ui-calendarMenu-day-input-height:32px;--gse-ui-calendarMenu-day-input-width:160px;--gse-ui-calendarMenu-day-headerText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-day-headerText-fontWeight:700;--gse-ui-calendarMenu-day-headerText-fontSize:12px;--gse-ui-calendarMenu-day-headerText-lineHeight:18px;--gse-ui-calendarMenu-day-date-size:32px;--gse-ui-calendarMenu-day-timePickerOn-width:272px;--gse-ui-calendarMenu-day-timePickerOn-padding:0px 24px 18px;--gse-ui-calendarMenu-height:234px;--gse-ui-calendarMenu-width:250px;--gse-ui-calendarMenu-dateBody-padding:16px 24px;--gse-ui-calendarMenu-dateBody-gap:8px;--gse-ui-calendarMenu-header-backgroundColor:#2143a2;--gse-ui-calendarMenu-header-foregroundColor:#ffffff;--gse-ui-calendarMenu-header-gap:8px;--gse-ui-calendarMenu-header-padding:12px 16px;--gse-ui-calendarMenu-header-arrow-padding:8px;--gse-ui-calendarMenu-backgroundColor:#ffffff;--gse-ui-calendarMenu-date-defaultText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-date-defaultText-fontWeight:400;--gse-ui-calendarMenu-date-defaultText-fontSize:12px;--gse-ui-calendarMenu-date-defaultText-lineHeight:18px;--gse-ui-calendarMenu-date-currentText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-date-currentText-fontWeight:700;--gse-ui-calendarMenu-date-currentText-fontSize:12px;--gse-ui-calendarMenu-date-currentText-lineHeight:18px;--gse-ui-calendarMenu-date-selected-foregroundColor:#ffffff;--gse-ui-calendarMenu-date-selected-backgroundColor:#2143a2;--gse-ui-calendarMenu-date-selected-hoverBackgroundColor:#19327a;--gse-ui-calendarMenu-date-hover-backgroundColor:#e7e9f9;--gse-ui-calendarMenu-date-range-backgroundColor:#d5def7;--gse-ui-calendarMenu-date-default-foregroundColor:#2a2a2e;--gse-ui-calendarMenu-single-header-borderRadius:8px 8px 0 0;--gse-ui-calendarMenu-single-body-borderRadius:0 0 8px 8px;--gse-ui-calendarMenu-range-header-firstMonth-borderRadius:8px 0 0 0;--gse-ui-calendarMenu-range-header-secondMonth-borderRadius:0 8px 0 0;--gse-ui-calendarMenu-range-body-firstMonth-borderRadius:0 0 0 8px;--gse-ui-calendarMenu-range-body-secondMonth-borderRadius:0 0 8px 0;--gse-ui-calendarMenu-range-date-endDate-borderRadius:0 16px 16px 0;--gse-ui-calendarMenu-range-date-startDate-borderRadius:16px 0 0 16px;--gse-ui-calendarMenu-range-timePickerOn-padding:0px 24px 18px;--gse-ui-calendarMenu-range-timePickerOn-gap:32px;--gse-ui-calendarMenu-disabled-opacity:0.5;--gse-ui-calendarMenu-monthBody-padding:16px 24px;--gse-ui-calendarMenu-monthBody-gap:2px;--gse-ui-calendarMenu-boxShadow:0 0 4px 1px #2a2a2e26;--gse-ui-calendarMenu-ctaGroup-height:68px;--gse-ui-calendarMenu-ctaGroup-padding:18px 24px;--gse-ui-globalNav-menuOption-selected-backgroundColor:#2143a2;--gse-ui-globalNav-menuOption-selected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-disabled-backgroundColor:#ffffff;--gse-ui-globalNav-menuOption-disabled-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-selectedPanel-backgroundColor:#2954cb;--gse-ui-globalNav-menuOption-selectedPanel-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-return-selected-backgroundColor:#2143a2;--gse-ui-globalNav-menuOption-return-selected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-return-default-backgroundColor:#2143a2;--gse-ui-globalNav-menuOption-return-default-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-return-hover-backgroundColor:#2954cb;--gse-ui-globalNav-menuOption-return-hover-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-height:32px;--gse-ui-globalNav-menuOption-width:248px;--gse-ui-globalNav-menuOption-padding:0px 12px;--gse-ui-globalNav-menuOption-gap:8px;--gse-ui-globalNav-menuOption-default-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-hover-backgroundColor:#19327a;--gse-ui-globalNav-menuOption-hover-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-panelSelected-backgroundColor:#2143a2;--gse-ui-globalNav-menuOption-panelSelected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-focus-borderRadius:8px;--gse-ui-globalNav-menuOption-borderRadius:4px;--gse-ui-globalNav-menuOption-disableOpacity:0.5;--gse-ui-globalNav-menuOption-activeSelected-backgroundColor:#2954cb;--gse-ui-globalNav-menuOption-activeSelected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-treeView-bar:#3d538f;--gse-ui-globalNav-menuOption-newTab-default-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-newTab-hover-backgroundColor:#19327a;--gse-ui-globalNav-menuOption-newTab-hover-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-newTab-selected-backgroundColor:#2143a2;--gse-ui-globalNav-menuOption-newTab-selected-foregroundColor:#ffffff;--gse-ui-globalNav-sideMenu:linear-gradient(\n    135deg,\n    #09b581 0%,\n    #9de1cd 100%\n  );--gse-ui-globalNav-text-fontFamily:\"Noto Sans\";--gse-ui-globalNav-text-fontWeight:700;--gse-ui-globalNav-text-fontSize:12px;--gse-ui-globalNav-text-lineHeight:18px;--gse-ui-globalNav-toggle-onQueue-text-fontFamily:Roboto;--gse-ui-globalNav-toggle-onQueue-text-lineHeight:16px;--gse-ui-globalNav-toggle-onQueue-text-fontSize:12px;--gse-ui-globalNav-toggle-onQueue-text-fontWeight:600;--gse-ui-globalNav-toggle-gap:16px;--gse-ui-globalNav-toggle-offQueue-text-fontFamily:Roboto;--gse-ui-globalNav-toggle-offQueue-text-lineHeight:16px;--gse-ui-globalNav-toggle-offQueue-text-fontSize:12px;--gse-ui-globalNav-toggle-offQueue-text-fontWeight:400;--gse-ui-globalNav-focus-border-color:#5476d5;--gse-ui-globalNav-focus-border-width:2px;--gse-ui-globalNav-focus-border-style:solid;--gse-ui-globalNav-buttonReturn-height:48px;--gse-ui-globalNav-buttonReturn-width:280px;--gse-ui-globalNav-buttonReturn-padding:16px 28px;--gse-ui-globalNav-buttonReturn-gap:12px;--gse-ui-globalNav-treeView-border-color:#3d538f;--gse-ui-globalNav-treeView-border-width:2px;--gse-ui-globalNav-treeView-border-style:solid;--gse-ui-globalNav-treeView-gap:8px;--gse-ui-globalNav-treeView-width:224px;--gse-ui-globalNav-bar-padding:8px 12px;--gse-ui-globalNav-topBar-items-gap:16px;--gse-ui-globalNav-topBar-padding:16px 24px;--gse-ui-globalNav-topBar-height:64px;--gse-ui-globalNav-topBar-frame-backgroundColor:#ffffff;--gse-ui-globalNav-topBar-frame-stroke:#cad1e1;--gse-ui-globalNav-topBar-logo:#ff451a;--gse-ui-globalNav-topBar-pageTitle:#152550;--gse-ui-globalNav-topBar-menuButton-closed-default-foregroundColor:#2143a2;--gse-ui-globalNav-topBar-menuButton-closed-hover-backgroundColor:#19327a;--gse-ui-globalNav-topBar-menuButton-closed-hover-foregroundColorStroke:#2143a2;--gse-ui-globalNav-topBar-menuButton-closed-hover-foregroundColor:#ffffff;--gse-ui-globalNav-topBar-menuButton-open-default-foregroundColorStroke:#ffffff;--gse-ui-globalNav-topBar-menuButton-open-hover-backgroundColor:#19327a;--gse-ui-globalNav-topBar-menuButton-open-hover-foregroundColor:#d5def7;--gse-ui-globalNav-panel-stroke:#cad1e100;--gse-ui-globalNav-panel-panelTitle:#ffffff;--gse-ui-globalNav-panel-primary:linear-gradient(\n    127deg,\n    #3d538f 3.19%,\n    #263b73 225.06%\n  );--gse-ui-globalNav-panel-secondary:linear-gradient(\n    358deg,\n    #263b73 0.16%,\n    #152550 98.45%\n  );--gse-ui-rating-star-gap:8px;--gse-ui-rating-default-color:#a3a8b5;--gse-ui-rating-active-color:#2143a2;--gse-ui-rating-hover-color:#19327a;--gse-ui-rating-disabled-color:#a3a8b5;--gse-ui-rating-disabled-opacity:0.5;--gse-ui-rating-size:16px;--gse-ui-card-backgroundColor:#ffffff;--gse-ui-card-borderRadius:8px;--gse-ui-card-default-border-color:#c1c6d4;--gse-ui-card-default-border-width:1px;--gse-ui-card-default-border-style:solid;--gse-ui-card-raised-border-color:#c1c6d4;--gse-ui-card-raised-border-width:1px;--gse-ui-card-raised-border-style:solid;--gse-ui-card-raised-boxShadow:0 0 6px 1px #2a2a2e26;--gse-ui-card-padding:24px;--gse-ui-card-borderless-border-color:rgba(0, 0, 0, 0);--gse-ui-card-borderless-border-width:1px;--gse-ui-card-borderless-border-style:solid;--gse-ui-tooltip-light-border-color:#c1c6d4;--gse-ui-tooltip-light-border-width:1px;--gse-ui-tooltip-light-border-style:solid;--gse-ui-tooltip-light-backgroundColor:#ffffff;--gse-ui-tooltip-light-foregroundColor:#2a2a2e;--gse-ui-tooltip-dark-border-color:#6a6d75;--gse-ui-tooltip-dark-border-width:1px;--gse-ui-tooltip-dark-border-style:solid;--gse-ui-tooltip-dark-backgroundColor:#2a2a2e;--gse-ui-tooltip-dark-foregroundColor:#ffffff;--gse-ui-tooltip-dark-iconColor:#ffffff;--gse-ui-tooltip-boxShadow:0 0 6px 1px #2a2a2e26;--gse-ui-tooltip-padding:8px 12px;--gse-ui-tooltip-height:32px;--gse-ui-tooltip-gap:8px;--gse-ui-tooltip-borderRadius:4px;--gse-ui-tooltip-text-fontFamily:\"Noto Sans\";--gse-ui-tooltip-text-fontWeight:400;--gse-ui-tooltip-text-fontSize:12px;--gse-ui-tooltip-text-lineHeight:18px;--gse-ui-tooltip-targetOffset:16px;--gse-ui-tooltip-maxWidth:350px;--gse-ui-tag-borderRadius:16px;--gse-ui-tag-default-bold-backgroundColor:#263b73;--gse-ui-tag-default-bold-foregroundColor:#ffffff;--gse-ui-tag-default-subtle-backgroundColor:#9faac6;--gse-ui-tag-default-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent1-bold-backgroundColor:#596ea6;--gse-ui-tag-accent1-bold-foregroundColor:#ffffff;--gse-ui-tag-accent1-subtle-backgroundColor:#b2b7c4;--gse-ui-tag-accent1-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent2-bold-backgroundColor:#54c6ab;--gse-ui-tag-accent2-bold-foregroundColor:#2a2a2e;--gse-ui-tag-accent2-subtle-backgroundColor:#cceee6;--gse-ui-tag-accent2-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent3-bold-backgroundColor:#056385;--gse-ui-tag-accent3-bold-foregroundColor:#ffffff;--gse-ui-tag-accent3-subtle-backgroundColor:#81cbe5;--gse-ui-tag-accent3-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent4-bold-backgroundColor:#607732;--gse-ui-tag-accent4-bold-foregroundColor:#ffffff;--gse-ui-tag-accent4-subtle-backgroundColor:#c6dd98;--gse-ui-tag-accent4-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent5-bold-backgroundColor:#5798d9;--gse-ui-tag-accent5-bold-foregroundColor:#2a2a2e;--gse-ui-tag-accent5-subtle-backgroundColor:#9ac1e8;--gse-ui-tag-accent5-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent6-subtle-backgroundColor:#cdacff;--gse-ui-tag-accent6-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent6-bold-backgroundColor:#8a5ecc;--gse-ui-tag-accent6-bold-foregroundColor:#ffffff;--gse-ui-tag-textLarge-fontFamily:\"Noto Sans\";--gse-ui-tag-textLarge-fontWeight:600;--gse-ui-tag-textLarge-fontSize:14px;--gse-ui-tag-textLarge-lineHeight:20px;--gse-ui-tag-textSmall-fontFamily:\"Noto Sans\";--gse-ui-tag-textSmall-fontWeight:600;--gse-ui-tag-textSmall-fontSize:12px;--gse-ui-tag-textSmall-lineHeight:18px;--gse-ui-tag-padding:0 12px;--gse-ui-tag-removable-padding:0 8px 0 12px;--gse-ui-tag-removable-gap:4px;--gse-ui-tag-accent7-bold-backgroundColor:#89387b;--gse-ui-tag-accent7-bold-foregroundColor:#ffffff;--gse-ui-tag-accent7-subtle-backgroundColor:#ef9ee1;--gse-ui-tag-accent7-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-height:20px;--gse-ui-tag-accent8-bold-backgroundColor:#ff5c77;--gse-ui-tag-accent8-bold-foregroundColor:#2a2a2e;--gse-ui-tag-accent8-subtle-backgroundColor:#ff9dad;--gse-ui-tag-accent8-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent9-bold-backgroundColor:#992910;--gse-ui-tag-accent9-bold-foregroundColor:#ffffff;--gse-ui-tag-accent9-subtle-backgroundColor:#ffb5a3;--gse-ui-tag-accent9-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-accent10-bold-backgroundColor:#ffc650;--gse-ui-tag-accent10-bold-foregroundColor:#2a2a2e;--gse-ui-tag-accent10-subtle-backgroundColor:#ffdd96;--gse-ui-tag-accent10-subtle-foregroundColor:#2a2a2e;--gse-ui-tag-button-size:16px;--gse-ui-tag-disabled-opacity:0.5;--gse-ui-tag-small-height:20px;--gse-ui-tag-large-height:32px;--gse-ui-badge-borderRadius:16px;--gse-ui-badge-text-fontFamily:\"Noto Sans\";--gse-ui-badge-text-fontWeight:600;--gse-ui-badge-text-fontSize:12px;--gse-ui-badge-text-lineHeight:18px;--gse-ui-badge-height:20px;--gse-ui-badge-padding:2px 12px;--gse-ui-badge-gap:4px;--gse-ui-badge-info-bold-backgroundColor:#3d538f;--gse-ui-badge-info-bold-foregroundColor:#ffffff;--gse-ui-badge-info-regular-backgroundColor:#f0f1f5;--gse-ui-badge-info-regular-foregroundColor:#2a2a2e;--gse-ui-badge-success-bold-backgroundColor:#09b581;--gse-ui-badge-success-bold-foregroundColor:#2a2a2e;--gse-ui-badge-success-regular-backgroundColor:#cef0e6;--gse-ui-badge-success-regular-foregroundColor:#2a2a2e;--gse-ui-badge-warning-bold-backgroundColor:#f8c73e;--gse-ui-badge-warning-bold-foregroundColor:#2a2a2e;--gse-ui-badge-warning-regular-backgroundColor:#fce9b2;--gse-ui-badge-warning-regular-foregroundColor:#2a2a2e;--gse-ui-badge-error-bold-backgroundColor:#e22245;--gse-ui-badge-error-bold-foregroundColor:#ffffff;--gse-ui-badge-error-regular-backgroundColor:#f3a7b5;--gse-ui-badge-error-regular-foregroundColor:#2a2a2e;--gse-ui-icon-small-size:16px;--gse-ui-icon-medium-size:24px;--gse-ui-icon-large-size:32px;--gse-ui-icon-color:#4f5157;--gse-ui-alert-padding:8px 16px;--gse-ui-alert-gap:8px;--gse-ui-alert-info-backgroundColor:#f0f1f5;--gse-ui-alert-info-foregroundColor:#2a2a2e;--gse-ui-alert-info-iconColor:#3d538f;--gse-ui-alert-info-border-color:#bfc6d9;--gse-ui-alert-info-border-width:1px;--gse-ui-alert-info-border-style:solid;--gse-ui-alert-success-backgroundColor:#cef0e6;--gse-ui-alert-success-foregroundColor:#2a2a2e;--gse-ui-alert-success-iconColor:#056d4d;--gse-ui-alert-success-border-color:#9de1cd;--gse-ui-alert-success-border-width:1px;--gse-ui-alert-success-border-style:solid;--gse-ui-alert-warning-backgroundColor:#fef4d8;--gse-ui-alert-warning-foregroundColor:#2a2a2e;--gse-ui-alert-warning-iconColor:#9a7b25;--gse-ui-alert-warning-border-color:#fce9b2;--gse-ui-alert-warning-border-width:1px;--gse-ui-alert-warning-border-style:solid;--gse-ui-alert-error-backgroundColor:#f9d3da;--gse-ui-alert-error-foregroundColor:#2a2a2e;--gse-ui-alert-error-iconColor:#b51b37;--gse-ui-alert-error-border-color:#f3a7b5;--gse-ui-alert-error-border-width:1px;--gse-ui-alert-error-border-style:solid;--gse-ui-alert-text-fontFamily:\"Noto Sans\";--gse-ui-alert-text-fontWeight:400;--gse-ui-alert-text-fontSize:12px;--gse-ui-alert-text-lineHeight:18px;--gse-ui-alert-emphasisText-fontFamily:\"Noto Sans\";--gse-ui-alert-emphasisText-fontWeight:700;--gse-ui-alert-emphasisText-fontSize:12px;--gse-ui-alert-emphasisText-lineHeight:18px;--gse-ui-alert-borderRadius:4px;--gse-ui-breadcrumbs-primary-height:20px;--gse-ui-breadcrumbs-primary-separator-padding:0 12px;--gse-ui-breadcrumbs-primary-separator-typography-fontFamily:\"Noto Sans\";--gse-ui-breadcrumbs-primary-separator-typography-fontWeight:700;--gse-ui-breadcrumbs-primary-separator-typography-fontSize:14px;--gse-ui-breadcrumbs-primary-separator-typography-lineHeight:20px;--gse-ui-breadcrumbs-secondary-height:16px;--gse-ui-breadcrumbs-secondary-separator-padding:0 8px;--gse-ui-breadcrumbs-secondary-separator-typography-fontFamily:\"Noto Sans\";--gse-ui-breadcrumbs-secondary-separator-typography-fontWeight:700;--gse-ui-breadcrumbs-secondary-separator-typography-fontSize:14px;--gse-ui-breadcrumbs-secondary-separator-typography-lineHeight:20px;--gse-ui-breadcrumbs-separator-color:#dce1ed;--gse-ui-breadcrumbs-borderRadius:0;--gse-ui-segmentedControl-button-padding:0 12px;--gse-ui-segmentedControl-button-gap:8px;--gse-ui-segmentedControl-button-start-borderRadius:4px 0 0 4px;--gse-ui-segmentedControl-button-selected-borderRadius:4px;--gse-ui-segmentedControl-button-middle-borderRadius:0;--gse-ui-segmentedControl-button-end-borderRadius:0 4px 4px 0;--gse-ui-segmentedControl-button-disabled-opacity:0.5;--gse-ui-segmentedControl-button-disabled-backgroundColor:rgba(0, 0, 0, 0);--gse-ui-segmentedControl-button-disabled-foregroundColor:#19327a;--gse-ui-segmentedControl-button-default-backgroundColor:#ffffff;--gse-ui-segmentedControl-button-default-foregroundColor:#2143a2;--gse-ui-segmentedControl-button-hover-backgroundColor:#e7e9f9;--gse-ui-segmentedControl-button-hover-foregroundColor:#102251;--gse-ui-segmentedControl-button-active-backgroundColor:#adbff0;--gse-ui-segmentedControl-button-active-foregroundColor:#102251;--gse-ui-segmentedControl-borderRadius:4px;--gse-ui-segmentedControl-height:32px;--gse-ui-segmentedControl-border-color:#829ce5;--gse-ui-segmentedControl-border-width:1px;--gse-ui-segmentedControl-border-style:solid;--gse-ui-segmentedControl-divider-color:#829ce5;--gse-ui-segmentedControl-divider-width:1px;--gse-ui-segmentedControl-divider-style:solid;--gse-ui-segmentedControl-iconOnly-padding:0 8px;--gse-ui-segmentedControl-focus-offset:0;--gse-ui-formFooter-page-desktop-bottomPadding:16px;--gse-ui-formFooter-page-desktop-topPadding:16px;--gse-ui-formFooter-page-desktop-horizontalPadding:32px;--gse-ui-formFooter-page-desktop-gap:16px;--gse-ui-formFooter-page-mobile-bottomPadding:16px;--gse-ui-formFooter-page-mobile-topPadding:16px;--gse-ui-formFooter-page-mobile-horizontalPadding:16px;--gse-ui-formFooter-page-mobile-gap:16px;--gse-ui-formFooter-separator-color:#c1c6d4;--gse-ui-formFooter-separator-width:1px;--gse-ui-formFooter-separator-style:solid;--gse-ui-formFooter-sideSheet-desktop-bottomPadding:16px;--gse-ui-formFooter-sideSheet-desktop-topPadding:16px;--gse-ui-formFooter-sideSheet-desktop-horizontalPadding:24px;--gse-ui-formFooter-sideSheet-desktop-gap:16px;--gse-ui-formFooter-backgroundColor:#ffffff;--gse-ui-formFooter-border-color:#19327a;--gse-ui-formFooter-border-width:1px;--gse-ui-formFooter-border-style:solid;--gse-ui-statusGlyph-negative:#b51b37;--gse-ui-statusGlyph-positive:#056d4d;--gse-ui-statusGlyph-neutral:#9a7b25;--gse-ui-statusGlyph-information:#3d538f;--gse-ui-copyToClipboard-label-active-backgroundColor:#d5def7;--gse-ui-copyToClipboard-label-foregroundColor:#2a2a2e;--gse-ui-copyToClipboard-label-padding:2px 4px;--gse-ui-copyToClipboard-label-borderRadius:4px;--gse-ui-copyToClipboard-label-text-fontFamily:\"Noto Sans\";--gse-ui-copyToClipboard-label-text-fontWeight:600;--gse-ui-copyToClipboard-label-text-fontSize:14px;--gse-ui-copyToClipboard-label-text-lineHeight:20px;--gse-ui-copyToClipboard-label-text-textDecoration:underline;--gse-ui-copyToClipboard-gap:8px;--gse-ui-copyToClipboard-contentContainer-gap:4px;--gse-ui-copyToClipboard-iconContainer-padding:4px;--gse-ui-copyToClipboard-tooltipIcon-success-foregroundColor:#056d4d;--gse-ui-copyToClipboard-tooltipIcon-error-foregroundColor:#b51b37;--gse-ui-dismissButton-foregroundColor:#4f5157;--gse-ui-button-default-height:32px;--gse-ui-button-default-padding:0 12px;--gse-ui-button-default-paddingIconOnly:8px;--gse-ui-button-dismiss-small-height:24px;--gse-ui-button-dismiss-small-width:24px;--gse-ui-button-dismiss-medium-height:32px;--gse-ui-button-dismiss-medium-width:32px;--gse-ui-button-iconOnly-width:32px;--gse-ui-button-icon-size:16px;--gse-ui-button-compact-height:24px;--gse-ui-button-compact-padding:0 12px;--gse-ui-button-compact-paddingIconOnly:4px;--gse-ui-button-gap:8px;--gse-ui-button-primary-default-backgroundColor:#2143a2;--gse-ui-button-primary-default-foregroundColor:#ffffff;--gse-ui-button-primary-hover-backgroundColor:#19327a;--gse-ui-button-primary-hover-foregroundColor:#ffffff;--gse-ui-button-primary-active-backgroundColor:#102251;--gse-ui-button-primary-active-foregroundColor:#ffffff;--gse-ui-button-secondary-default-backgroundColor:#e7e9f9;--gse-ui-button-secondary-default-foregroundColor:#2143a2;--gse-ui-button-secondary-hover-backgroundColor:#d5def7;--gse-ui-button-secondary-hover-foregroundColor:#19327a;--gse-ui-button-secondary-active-backgroundColor:#adbff0;--gse-ui-button-secondary-active-foregroundColor:#102251;--gse-ui-button-tertiary-default-backgroundColor:rgba(0, 0, 0, 0);--gse-ui-button-tertiary-default-foregroundColor:#2143a2;--gse-ui-button-tertiary-default-border-color:#2143a2;--gse-ui-button-tertiary-default-border-width:1px;--gse-ui-button-tertiary-default-border-style:solid;--gse-ui-button-tertiary-hover-backgroundColor:#19327a;--gse-ui-button-tertiary-hover-foregroundColor:#ffffff;--gse-ui-button-tertiary-active-backgroundColor:#102251;--gse-ui-button-tertiary-active-foregroundColor:#ffffff;--gse-ui-button-ghost-default-backgroundColor:rgba(0, 0, 0, 0);--gse-ui-button-ghost-default-foregroundColor:#2143a2;--gse-ui-button-ghost-hover-backgroundColor:#d5def7;--gse-ui-button-ghost-hover-foregroundColor:#19327a;--gse-ui-button-ghost-active-backgroundColor:#adbff0;--gse-ui-button-ghost-active-foregroundColor:#102251;--gse-ui-button-danger-default-backgroundColor:#e22245;--gse-ui-button-danger-default-foregroundColor:#ffffff;--gse-ui-button-danger-hover-backgroundColor:#881429;--gse-ui-button-danger-hover-foregroundColor:#ffffff;--gse-ui-button-danger-active-backgroundColor:#440a15;--gse-ui-button-danger-active-foregroundColor:#ffffff;--gse-ui-button-borderRadius:4px;--gse-ui-button-disabled-opacity:0.5;--gse-ui-button-text-fontFamily:\"Noto Sans\";--gse-ui-button-text-fontWeight:700;--gse-ui-button-text-fontSize:12px;--gse-ui-button-text-lineHeight:18px;--gse-ui-actionButton-rightSegment-size:32px;--gse-ui-actionButton-rightSegment-padding:0 8px;--gse-ui-actionButton-rightSegment-borderRadius:0 4px 4px 0;--gse-ui-actionButton-rightSegment-focusBorderRadius:0 16px 16px 0;--gse-ui-actionButton-height:32px;--gse-ui-actionButton-focus-height:40px;--gse-ui-actionButton-leftSegment-gap:8px;--gse-ui-actionButton-leftSegment-padding:0 16px;--gse-ui-actionButton-leftSegment-focusBorderRadius:16px 0 0 16px;--gse-ui-actionButton-leftSegment-borderRadius:4px 0 0 4px;--gse-ui-actionButton-borderRadius:4px;--gse-ui-actionButton-tertiary-divider-color:#2143a2;--gse-ui-actionButton-tertiary-divider-width:2px;--gse-ui-actionButton-tertiary-divider-style:solid;--gse-ui-actionButton-primary-divider-color:#ffffff;--gse-ui-actionButton-primary-divider-width:2px;--gse-ui-actionButton-primary-divider-style:solid;--gse-ui-actionButton-secondary-divider-color:#ffffff;--gse-ui-actionButton-secondary-divider-width:2px;--gse-ui-actionButton-secondary-divider-style:solid;--gse-ui-actionButton-danger-divider-color:#ffffff;--gse-ui-actionButton-danger-divider-width:2px;--gse-ui-actionButton-danger-divider-style:solid;--gse-ui-links-standalone-medium-text-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-medium-text-fontWeight:600;--gse-ui-links-standalone-medium-text-fontSize:14px;--gse-ui-links-standalone-medium-text-lineHeight:20px;--gse-ui-links-standalone-medium-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-medium-underlinedText-fontWeight:600;--gse-ui-links-standalone-medium-underlinedText-fontSize:14px;--gse-ui-links-standalone-medium-underlinedText-lineHeight:20px;--gse-ui-links-standalone-medium-underlinedText-textDecoration:underline;--gse-ui-links-standalone-small-text-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-small-text-fontWeight:600;--gse-ui-links-standalone-small-text-fontSize:12px;--gse-ui-links-standalone-small-text-lineHeight:18px;--gse-ui-links-standalone-small-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-small-underlinedText-fontWeight:600;--gse-ui-links-standalone-small-underlinedText-fontSize:12px;--gse-ui-links-standalone-small-underlinedText-lineHeight:18px;--gse-ui-links-standalone-small-underlinedText-textDecoration:underline;--gse-ui-links-standalone-padding:8px;--gse-ui-links-standalone-gap:8px;--gse-ui-links-inLine-medium-text-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-medium-text-fontWeight:600;--gse-ui-links-inLine-medium-text-fontSize:14px;--gse-ui-links-inLine-medium-text-lineHeight:20px;--gse-ui-links-inLine-medium-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-medium-underlinedText-fontWeight:600;--gse-ui-links-inLine-medium-underlinedText-fontSize:14px;--gse-ui-links-inLine-medium-underlinedText-lineHeight:20px;--gse-ui-links-inLine-medium-underlinedText-textDecoration:underline;--gse-ui-links-inLine-small-text-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-small-text-fontWeight:600;--gse-ui-links-inLine-small-text-fontSize:12px;--gse-ui-links-inLine-small-text-lineHeight:18px;--gse-ui-links-inLine-small-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-small-underlinedText-fontWeight:600;--gse-ui-links-inLine-small-underlinedText-fontSize:12px;--gse-ui-links-inLine-small-underlinedText-lineHeight:18px;--gse-ui-links-inLine-small-underlinedText-textDecoration:underline;--gse-ui-links-inLine-padding:4px;--gse-ui-links-icon:16px;--gse-ui-links-default-foregroundColor:#2143a2;--gse-ui-links-disabled-foregroundColor:#2143a2;--gse-ui-links-hover-foregroundColor:#19327a;--gse-ui-links-active-foregroundColor:#102251;--gse-ui-links-visited-foregroundColor:#3d538f;--gse-ui-links-focusOutline-borderRadius:4px;--gse-ui-radioButton-icon-default-unselectedForegroundColor:#a3a8b5;--gse-ui-radioButton-icon-default-selectedForegroundColor:#2143a2;--gse-ui-radioButton-icon-hover-foregroundColor:#19327a;--gse-ui-radioButton-icon-active-foregroundColor:#102251;--gse-ui-radioButton-icon-error-foregroundColor:#b51b37;--gse-ui-radioButton-icon-height:16px;--gse-ui-radioButton-icon-width:16px;--gse-ui-radioButton-label-foregroundColor:#2a2a2e;--gse-ui-radioButton-label-text-fontFamily:\"Noto Sans\";--gse-ui-radioButton-label-text-fontWeight:400;--gse-ui-radioButton-label-text-fontSize:12px;--gse-ui-radioButton-label-text-lineHeight:18px;--gse-ui-radioButton-gap:8px;--gse-ui-radioButton-helper-padding:4px 0 0 24px;--gse-ui-radioButton-helper-gap:8px;--gse-ui-radioButton-disabled-opacity:0.5;--gse-ui-radioButton-focus-border-color:#5476d5;--gse-ui-radioButton-focus-border-width:2px;--gse-ui-radioButton-focus-border-style:solid;--gse-ui-radioButton-focus-borderRadius:100%;--gse-ui-radioButton-focus-offset:1px;--gse-ui-checkbox-icon-default-unselectedForegroundColor:#a3a8b5;--gse-ui-checkbox-icon-default-selectedForegroundColor:#2143a2;--gse-ui-checkbox-icon-hover-foregroundColor:#19327a;--gse-ui-checkbox-icon-active-foregroundColor:#102251;--gse-ui-checkbox-icon-error-foregroundColor:#b51b37;--gse-ui-checkbox-icon-height:16px;--gse-ui-checkbox-icon-width:16px;--gse-ui-checkbox-label-foregroundColor:#2a2a2e;--gse-ui-checkbox-label-text-fontFamily:\"Noto Sans\";--gse-ui-checkbox-label-text-fontWeight:400;--gse-ui-checkbox-label-text-fontSize:12px;--gse-ui-checkbox-label-text-lineHeight:18px;--gse-ui-checkbox-helper-padding:4px 0 0 24px;--gse-ui-checkbox-helper-gap:8px;--gse-ui-checkbox-gap:8px;--gse-ui-checkbox-disabled-opacity:0.5;--gse-ui-checkbox-focus-border-color:#5476d5;--gse-ui-checkbox-focus-border-width:2px;--gse-ui-checkbox-focus-border-style:solid;--gse-ui-checkbox-focus-borderRadius:4px;--gse-ui-checkbox-focus-borderRadiusSmall:2px;--gse-ui-checkbox-focus-offset:1px;--gse-ui-checkbox-group-gap:8px;--gse-ui-menu-option-gap:8px;--gse-ui-menu-option-height:32px;--gse-ui-menu-option-startIcon-height:16px;--gse-ui-menu-option-startIcon-width:16px;--gse-ui-menu-option-label-default-text-fontFamily:\"Noto Sans\";--gse-ui-menu-option-label-default-text-fontWeight:400;--gse-ui-menu-option-label-default-text-fontSize:12px;--gse-ui-menu-option-label-default-text-lineHeight:18px;--gse-ui-menu-option-label-active-text-fontFamily:\"Noto Sans\";--gse-ui-menu-option-label-active-text-fontWeight:700;--gse-ui-menu-option-label-active-text-fontSize:12px;--gse-ui-menu-option-label-active-text-lineHeight:18px;--gse-ui-menu-option-label-foregroundColor:#2a2a2e;--gse-ui-menu-option-shortcut-text-fontFamily:\"Noto Sans\";--gse-ui-menu-option-shortcut-text-fontWeight:400;--gse-ui-menu-option-shortcut-text-fontSize:14px;--gse-ui-menu-option-shortcut-text-lineHeight:20px;--gse-ui-menu-option-shortcut-default-foregroundColor:#6a6d75;--gse-ui-menu-option-shortcut-selected-foregroundColor:#2a2a2e;--gse-ui-menu-option-hover-backgroundColor:#e7e9f9;--gse-ui-menu-option-selected-backgroundColor:#d5def7;--gse-ui-menu-option-disabled-opacity:0.5;--gse-ui-menu-option-checkbox-unchecked-default-foregroundColor:#a3a8b5;--gse-ui-menu-option-checkbox-unchecked-hover-foregroundColor:#19327a;--gse-ui-menu-option-checkbox-unchecked-selected-foregroundColor:#102251;--gse-ui-menu-option-checkbox-checked-default-foregroundColor:#2143a2;--gse-ui-menu-option-checkbox-checked-hover-foregroundColor:#19327a;--gse-ui-menu-option-checkbox-checked-selected-foregroundColor:#102251;--gse-ui-menu-option-parentIcon-width:16px;--gse-ui-menu-option-parentIcon-height:16px;--gse-ui-menu-option-parentIcon-default-foregroundColor:#4f5157;--gse-ui-menu-option-parentIcon-hover-foregroundColor:#3e4044;--gse-ui-menu-option-parentIcon-selected-foregroundColor:#2a2a2e;--gse-ui-menu-option-focus-border-color:#5476d5;--gse-ui-menu-option-focus-border-width:1px;--gse-ui-menu-option-focus-border-style:solid;--gse-ui-menu-option-default-backgroundColor:#ffffff;--gse-ui-menu-option-padding:0px 12px;--gse-ui-menu-option-subtext-padding:8px 12px;--gse-ui-menu-maxHeight:344px;--gse-ui-menu-borderRadius:4px;--gse-ui-menu-border-color:#c1c6d4;--gse-ui-menu-border-width:1px;--gse-ui-menu-border-style:solid;--gse-ui-menu-boxShadow:0 0 4px 1px #2a2a2e26;--gse-ui-menu-padding:8px 0px;--gse-ui-menu-backgroundColor:#ffffff;--gse-ui-menu-scrollbar-foregroundColor:#4f5157;--gse-ui-menu-divider-backgroundColor:#dce1ed;--gse-ui-menu-divider-margin:4px 0 8px 0;--gse-ui-menu-divider-height:1px;--gse-ui-menu-groupedMenu-title-padding:8px 12px 4px;--gse-ui-menu-groupedMenu-title-height:32px;--gse-ui-menu-groupedMenu-title-foregroundColor:#6a6d75;--gse-ui-menu-groupedMenu-title-text-fontFamily:Urbanist;--gse-ui-menu-groupedMenu-title-text-fontWeight:600;--gse-ui-menu-groupedMenu-title-text-fontSize:12px;--gse-ui-menu-groupedMenu-title-text-lineHeight:16px;--gse-ui-menu-groupedMenu-title-text-textCase:uppercase;--gse-ui-menu-groupedMenu-title-text-letterSpacing:1px;--gse-ui-menu-groupedMenu-padding:8px 1px;--gse-ui-menu-groupedMenu-divider-padding:4px 0px 8px;--gse-ui-menu-groupedMenu-divider-height:13px;--gse-ui-menu-groupedMenu-subtext-foregroundColor:#4f5157;--gse-ui-menu-selectAll-padding:12px;--gse-ui-menu-selectAll-gap:8px;--gse-ui-menu-selectAll-labelContainer-padding:2px 12px;--gse-ui-menu-selectAll-labelContainer-gap:8px;--gse-ui-menu-selectAll-label-gap:4px;--gse-ui-menu-selectAll-label-foregroundColor:#2a2a2e;--gse-ui-menu-selectAll-backgroundColor:#ffffff;--gse-ui-menu-selectAll-divider-default:#dce1ed;--gse-ui-menu-selectAll-divider-adjacentSelected:#c1c6d4;--gse-ui-menu-selectAll-scrolling-boxShadow:0 0 8px 1px\n    rgba(35, 57, 92, 0.15);--gse-ui-dropdown-menu-emptyState-header-text-fontFamily:Roboto;--gse-ui-dropdown-menu-emptyState-header-text-fontWeight:700;--gse-ui-dropdown-menu-emptyState-header-text-lineHeight:18px;--gse-ui-dropdown-menu-emptyState-header-text-fontSize:12px;--gse-ui-dropdown-menu-emptyState-header-foregroundColor:#2a2a2e;--gse-ui-dropdown-menu-emptyState-subheader-text-fontFamily:Roboto;--gse-ui-dropdown-menu-emptyState-subheader-text-fontWeight:400;--gse-ui-dropdown-menu-emptyState-subheader-text-lineHeight:18px;--gse-ui-dropdown-menu-emptyState-subheader-text-fontSize:12px;--gse-ui-dropdown-menu-emptyState-subheader-foregroundColor:#4f5157;--gse-ui-dropdown-menu-selectAll-labelText-fontFamily:\"Noto Sans\";--gse-ui-dropdown-menu-selectAll-labelText-fontWeight:400;--gse-ui-dropdown-menu-selectAll-labelText-fontSize:12px;--gse-ui-dropdown-menu-selectAll-labelText-lineHeight:18px;--gse-ui-dropdown-menu-selectAll-counterText-fontFamily:\"Noto Sans\";--gse-ui-dropdown-menu-selectAll-counterText-fontWeight:600;--gse-ui-dropdown-menu-selectAll-counterText-fontSize:12px;--gse-ui-dropdown-menu-selectAll-counterText-lineHeight:18px;--gse-ui-dropdown-gap:4px;--gse-ui-datePicker-range-gap:24px;--gse-ui-datePicker-startEndInput-gap:8px;--gse-ui-datePicker-dateTyped-gap:10px;--gse-ui-datePicker-dateTyped-backgroundColor:#e7e9f9;--gse-ui-datePicker-disabled-opacity:0.5;--gse-ui-datePicker-focusCalendar-gap:2px;--gse-ui-datePicker-iconHover:#3e4044;--gse-ui-datePicker-iconFocus:#2a2a2e;--gse-ui-datePicker-dateTime-inputRight-borderRadius:0px 4px 4px 0px;--gse-ui-datePicker-dateTime-inputRight-focus-borderRadius:0px 4px 4px 0px;--gse-ui-datePicker-dateTime-inputLeft-borderRadius:4px 0px 0px 4px;--gse-ui-datePicker-dateTime-inputLeft-focus-borderRadius:4px 0px 0px 4px;--gse-ui-datePicker-dateTime-gap:-1px;--gse-ui-datePicker-preset-padding:20px 16px;--gse-ui-datePicker-preset-gap:4px;--gse-ui-toggle-label-fontFamily:\"Noto Sans\";--gse-ui-toggle-label-fontWeight:400;--gse-ui-toggle-label-fontSize:12px;--gse-ui-toggle-label-lineHeight:18px;--gse-ui-toggle-gap:8px;--gse-ui-toggle-padding:8px;--gse-ui-toggle-track-width:32px;--gse-ui-toggle-track-height:16px;--gse-ui-toggle-track-enabled-off-backgroundColor:#c1c6d4;--gse-ui-toggle-track-enabled-on-backgroundColor:#2143a2;--gse-ui-toggle-track-disabled-off-backgroundColor:#c1c6d4;--gse-ui-toggle-track-disabled-on-backgroundColor:#2143a2;--gse-ui-toggle-track-error-off-backgroundColor:#f3a7b5;--gse-ui-toggle-track-error-on-backgroundColor:#b51b37;--gse-ui-toggle-track-hover-off-backgroundColor:#e7e9f9;--gse-ui-toggle-track-hover-on-backgroundColor:#19327a;--gse-ui-toggle-track-borderRadius:16px;--gse-ui-toggle-handle-width:16px;--gse-ui-toggle-handle-height:16px;--gse-ui-toggle-handle-hover-border-width:2px;--gse-ui-toggle-handle-hover-border-style:solid;--gse-ui-toggle-handle-hover-border-color:#5476d5;--gse-ui-toggle-handle-enabled-border-width:2px;--gse-ui-toggle-handle-enabled-border-color:#2143a2;--gse-ui-toggle-handle-enabled-border-style:solid;--gse-ui-toggle-handle-disabled-border-width:2px;--gse-ui-toggle-handle-disabled-border-color:#2143a2;--gse-ui-toggle-handle-disabled-border-style:solid;--gse-ui-toggle-handle-error-border-color:#e22245;--gse-ui-toggle-handle-error-border-width:2px;--gse-ui-toggle-handle-error-border-style:solid;--gse-ui-toggle-handle-backgroundColor:#ffffff;--gse-ui-toggle-handle-foregroundColor:#2143a2;--gse-ui-toggle-handle-borderRadius:16px;--gse-ui-toggle-disabled-opacity:0.5;--gse-ui-toggle-focus-border-color:#5476d5;--gse-ui-toggle-focus-border-width:2px;--gse-ui-toggle-focus-border-style:solid;--gse-ui-toggle-focus-borderRadius:20px;--gse-ui-toggle-focus-offset:1px;--gse-ui-timePicker-clock-padding:2px;--gse-ui-timePicker-clockStates-defaultColor:#4f5157;--gse-ui-timePicker-clockStates-hoverColor:#3e4044;--gse-ui-timePicker-clockStates-activeColor:#2a2a2e;--gse-ui-timePicker-clockStates-disabledColor:#4f515780;--gse-ui-timePicker-focusClock-border-color:#5476d5;--gse-ui-timePicker-focusClock-border-width:2px;--gse-ui-timePicker-focusClock-border-style:solid;--gse-ui-timePicker-focusClock-borderRadius:4px;--gse-ui-timePicker-focusAmpm-border-color:#5476d5;--gse-ui-timePicker-focusAmpm-border-width:2px;--gse-ui-timePicker-focusAmpm-border-style:solid;--gse-ui-timePicker-focusAmpm-borderRadius:4px;--gse-ui-timePicker-focusTime-border-color:#5476d5;--gse-ui-timePicker-focusTime-border-width:2px;--gse-ui-timePicker-focusTime-border-style:solid;--gse-ui-timePicker-focusTime-borderRadius:4px;--gse-ui-timePicker-ampm-padding:2px;--gse-ui-fileUpload-fileCard-borderRadius:4px;--gse-ui-fileUpload-fileCard-cardGroup-gap:8px;--gse-ui-fileUpload-fileCard-fileName-text-fontFamily:\"Noto Sans\";--gse-ui-fileUpload-fileCard-fileName-text-fontWeight:400;--gse-ui-fileUpload-fileCard-fileName-text-fontSize:12px;--gse-ui-fileUpload-fileCard-fileName-text-lineHeight:18px;--gse-ui-fileUpload-fileCard-fileName-default:#2a2a2e;--gse-ui-fileUpload-fileCard-error-errorMessage:#b51b37;--gse-ui-fileUpload-fileCard-error-errorHelper:#6a6d75;--gse-ui-fileUpload-fileCard-error-text-fontFamily:\"Noto Sans\";--gse-ui-fileUpload-fileCard-error-text-fontWeight:400;--gse-ui-fileUpload-fileCard-error-text-fontSize:12px;--gse-ui-fileUpload-fileCard-error-text-lineHeight:18px;--gse-ui-fileUpload-fileCard-card-padding:2px 8px;--gse-ui-fileUpload-fileCard-card-gap:4px;--gse-ui-fileUpload-fileCard-card-errorCard-fileNameSection-padding:0 8px;--gse-ui-fileUpload-fileCard-card-errorCard-errorTextSection-padding:0 8px;--gse-ui-fileUpload-fileCard-card-errorCard-errorTextSection-gap:4px;--gse-ui-fileUpload-fileCard-card-errorCard-mainContainer-padding:4px 0 8px;--gse-ui-fileUpload-fileCard-mainContainer-default-border-color:#c1c6d4;--gse-ui-fileUpload-fileCard-mainContainer-default-border-width:1px;--gse-ui-fileUpload-fileCard-mainContainer-default-border-style:solid;--gse-ui-fileUpload-fileCard-mainContainer-error-border-color:#e22245;--gse-ui-fileUpload-fileCard-mainContainer-error-border-width:1px;--gse-ui-fileUpload-fileCard-mainContainer-error-border-style:solid;--gse-ui-fileUpload-fileCard-boxShadow:0 0 4px 1px #2a2a2e26;--gse-ui-fileUpload-fileCard-statusIcon-success:#056d4d;--gse-ui-fileUpload-fileCard-statusIcon-error:#b51b37;--gse-ui-fileUpload-fileCard-foregroundColor:#ffffff;--gse-ui-fileUpload-dropZone-borderRadius:4px;--gse-ui-fileUpload-labelHelper-gap:4px;--gse-ui-fileUpload-mainContainer-gap:12px;--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontFamily:\"Noto Sans\";--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontWeight:400;--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontSize:12px;--gse-ui-fileUpload-dragAndDrop-dropZone-text-lineHeight:18px;--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-color:#a3a8b5;--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-width:1px;--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-style:dashed;--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-color:#102251;--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-width:2px;--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-style:dashed;--gse-ui-fileUpload-dragAndDrop-dropZone-minHeight:112px;--gse-ui-fileUpload-dragAndDrop-dropZone-background-active:#e7e9f9;--gse-ui-fileUpload-dragAndDrop-dropZoneText-color:#2a2a2e;--gse-ui-fileUpload-dragDrop-btnText-gap:12px;--gse-ui-colorPicker-label-requiredSymbolColor:#b51b37;--gse-ui-colorPicker-label-textColor:#2a2a2e;--gse-ui-colorPicker-label-text-fontFamily:\"Noto Sans\";--gse-ui-colorPicker-label-text-fontWeight:400;--gse-ui-colorPicker-label-text-fontSize:12px;--gse-ui-colorPicker-label-text-lineHeight:18px;--gse-ui-colorPicker-inputContainer-backgroundColor:#ffffff;--gse-ui-colorPicker-inputContainer-border-defaultColor:#a3a8b5;--gse-ui-colorPicker-inputContainer-border-hoverColor:#19327a;--gse-ui-colorPicker-inputContainer-border-activeColor:#102251;--gse-ui-colorPicker-inputContainer-border-errorColor:#e22245;--gse-ui-colorPicker-input-containerSizing:32px;--gse-ui-colorPicker-input-swatchSizing:24px;--gse-ui-colorPicker-input-swatchBorderRadius:2px;--gse-ui-colorPicker-gap:8px;--gse-ui-rangeSlider-handle-width:20px;--gse-ui-rangeSlider-handle-height:20px;--gse-ui-rangeSlider-handle-default-backgroundColor:#2143a2;--gse-ui-rangeSlider-handle-hover-backgroundColor:#19327a;--gse-ui-rangeSlider-handle-active-backgroundColor:#102251;--gse-ui-rangeSlider-handle-disabled-backgroundColor:#2143a2;--gse-ui-rangeSlider-handle-borderRadius:100%;--gse-ui-rangeSlider-disabled-opacity:0.5;--gse-ui-rangeSlider-label-text-fontFamily:\"Noto Sans\";--gse-ui-rangeSlider-label-text-fontWeight:600;--gse-ui-rangeSlider-label-text-fontSize:14px;--gse-ui-rangeSlider-label-text-lineHeight:20px;--gse-ui-rangeSlider-label-foregroundColor:#2a2a2e;--gse-ui-rangeSlider-bar-selected-backgroundColor:#2143a2;--gse-ui-rangeSlider-bar-default-backgroundColor:#c1c6d4;--gse-ui-rangeSlider-bar-height:4px;--gse-ui-rangeSlider-gap:16px;--gse-ui-rangeSlider-focusRing-borderRadius:100%;--gse-ui-rangeSlider-track-borderRadius:4px;--gse-ui-rangeSlider-set-height:20px;--gse-ui-flyoutMenu-anchor-height:8px;--gse-ui-flyoutMenu-anchor-width:76px;--gse-ui-flyoutMenu-width:208px;--gse-ui-flyoutMenu-borderRadius:4px;--gse-ui-flyoutMenu-padding:8px 0px;--gse-ui-flyoutMenu-parenting-gap:8px;--gse-ui-flyoutMenu-backgroundColor:#ffffff;--gse-ui-flyoutMenu-arrow-borderRadius:4px;--gse-ui-phoneInput-dropdown-hover-backgroundColor:#e7e9f9;--gse-ui-phoneInput-dropdown-active-backgroundColor:#d5def7;--gse-ui-phoneInput-dropdown-foregroundColor:#6a6d75;--gse-ui-phoneInput-dropdown-flag-height:12px;--gse-ui-phoneInput-dropdown-flag-width:16px;--gse-ui-phoneInput-dropdown-height:32px;--gse-ui-phoneInput-dropdown-menu-minWidth:230px;--gse-ui-phoneInput-dropdown-icon-width:16px;--gse-ui-phoneInput-dropdown-icon-height:16px;--gse-ui-phoneInput-dropdown-padding:0 8px 0 12px;--gse-ui-phoneInput-dropdown-disabled-padding:0 4px 0 12px;--gse-ui-phoneInput-dropdown-gap:4px;--gse-ui-phoneInput-countryCode-foregroundColor:#2a2a2e;--gse-ui-phoneInput-minWidth:230px;--gse-ui-contextMenu-button-default:32px;--gse-ui-contextMenu-button-compact:24px;--gse-ui-contextMenu-borderRadius:4px;--gse-ui-contextMenu-menu-maxHeight:344px;--gse-ui-contextMenu-menu-width:220px;--gse-ui-monthPicker-calendarStates-defaultColor:#4f5157;--gse-ui-monthPicker-calendarStates-hoverColor:#3e4044;--gse-ui-monthPicker-calendarStates-activeColor:#2a2a2e;--gse-ui-monthPicker-calendarStates-disabledColor:#4f515780;--gse-ui-monthPicker-calendarStates-focus-border-color:#5476d5;--gse-ui-monthPicker-calendarStates-focus-border-width:2px;--gse-ui-monthPicker-calendarStates-focus-border-style:solid;--gse-ui-selectorCard-ilustrativeIcon-foregroundColor:#4f5157;--gse-ui-selectorCard-text-foregroundColor:#2a2a2e;--gse-ui-selectorCard-default-backgroundColor:#ffffff;--gse-ui-selectorCard-default-selectedIndicator-selected-foregroundColor:#2143a2;--gse-ui-selectorCard-default-selectedIndicator-unselected-foregroundColor:#a3a8b5;--gse-ui-selectorCard-hover-backgroundColor:#e7e9f9;--gse-ui-selectorCard-hover-selectedIndicator-foregroundColor:#19327a;--gse-ui-selectorCard-active-backgroundColor:#d5def7;--gse-ui-selectorCard-active-selectedIndicator-foregroundColor:#102251;--gse-ui-selectorCard-error-backgroundColor:#f3a7b5;--gse-ui-selectorCard-error-selectedIndicator-foregroundColor:#b51b37;--gse-ui-selectorCard-error-border-color:#e22245;--gse-ui-selectorCard-error-border-width:1px;--gse-ui-selectorCard-error-border-style:solid;--gse-ui-selectorCard-simple-minWidth:108px;--gse-ui-selectorCard-simple-maxWidth:316px;--gse-ui-selectorCard-simple-minHeight:76px;--gse-ui-selectorCard-simple-maxHeight:116px;--gse-ui-selectorCard-simple-padding:12px;--gse-ui-selectorCard-simple-gap:8px;--gse-ui-selectorCard-simple-borderRadius:4px;--gse-ui-selectorCard-simple-label-fontFamily:Urbanist;--gse-ui-selectorCard-simple-label-fontWeight:700;--gse-ui-selectorCard-simple-label-fontSize:14px;--gse-ui-selectorCard-simple-label-lineHeight:24px;--gse-ui-selectorCard-descriptive-minWidth:216px;--gse-ui-selectorCard-descriptive-maxWidth:316px;--gse-ui-selectorCard-descriptive-minHeight:118px;--gse-ui-selectorCard-descriptive-maxHeight:220px;--gse-ui-selectorCard-descriptive-padding:16px;--gse-ui-selectorCard-descriptive-gap:8px;--gse-ui-selectorCard-descriptive-text-gap:4px;--gse-ui-selectorCard-descriptive-badge-marginTop:8px;--gse-ui-selectorCard-descriptive-borderRadius:4px;--gse-ui-selectorCard-descriptive-label-fontFamily:Urbanist;--gse-ui-selectorCard-descriptive-label-fontWeight:700;--gse-ui-selectorCard-descriptive-label-fontSize:16px;--gse-ui-selectorCard-descriptive-label-lineHeight:24px;--gse-ui-selectorCard-descriptive-description-fontFamily:\"Noto Sans\";--gse-ui-selectorCard-descriptive-description-fontWeight:400;--gse-ui-selectorCard-descriptive-description-fontSize:12px;--gse-ui-selectorCard-descriptive-description-lineHeight:18px;--gse-ui-selectorCard-unselected-border-color:#c1c6d4;--gse-ui-selectorCard-unselected-border-width:1px;--gse-ui-selectorCard-unselected-border-style:solid;--gse-ui-selectorCard-selected-border-color:#19327a;--gse-ui-selectorCard-selected-border-width:1px;--gse-ui-selectorCard-selected-border-style:solid;--gse-ui-selectorCard-disabled-opacity:0.5;--gse-ui-selectorCard-disabled-backgroundColor:#ffffff;--gse-ui-selectorCard-disabled-selectedIndicator-selected-foregroundColor:#2143a2;--gse-ui-selectorCard-disabled-selectedIndicator-unselected-foregroundColor:#a3a8b5;--gse-ui-ctaGroup-gap:8px;--gse-ui-stepper-icon-height:16px;--gse-ui-stepper-icon-width:16px;--gse-ui-stepper-icon-completed-selectedForegroundColor:#2143a2;--gse-ui-stepper-icon-active-foregroundColor:#2143a2;--gse-ui-stepper-icon-error-foregroundColor:#b51b37;--gse-ui-stepper-icon-incompleted-foregroundColor:#3e4044;--gse-ui-stepper-bar-horizontal-height:3px;--gse-ui-stepper-bar-vertical-width:3px;--gse-ui-stepper-bar-completed-selectedForegroundColor:#2143a2;--gse-ui-stepper-bar-active-foregroundColor:#2143a2;--gse-ui-stepper-bar-error-foregroundColor:#b51b37;--gse-ui-stepper-bar-incompleted-foregroundColor:#c1c6d4;--gse-ui-stepper-step-horizontal-minWidth:128px;--gse-ui-stepper-step-horizontal-body-marginRight:16px;--gse-ui-stepper-step-horizontal-gap:12px;--gse-ui-stepper-step-vertical-minHeight:90px;--gse-ui-stepper-step-vertical-body-marginRight:16px;--gse-ui-stepper-step-vertical-body-marginTop:4px;--gse-ui-stepper-step-vertical-gap:12px;--gse-ui-stepper-step-gap:12px;--gse-ui-stepper-step-text-gap:4px;--gse-ui-stepper-step-focus-border-color:#5476d5;--gse-ui-stepper-step-focus-border-width:2px;--gse-ui-stepper-step-focus-border-style:solid;--gse-ui-stepper-step-focus-borderRadius:4px;--gse-ui-stepper-step-disabled-opacity:0.5;--gse-ui-stepper-focus-offset:2px;--gse-ui-stepper-title-hover:#2143a2;--gse-ui-stepper-title-default:#3e4044;--gse-ui-stepper-default-text-fontFamily:Urbanist;--gse-ui-stepper-default-text-fontWeight:700;--gse-ui-stepper-default-text-fontSize:14px;--gse-ui-stepper-default-text-lineHeight:16px;--gse-ui-stepper-hover-text-fontFamily:Urbanist;--gse-ui-stepper-hover-text-fontWeight:700;--gse-ui-stepper-hover-text-fontSize:14px;--gse-ui-stepper-hover-text-lineHeight:16px;--gse-ui-stepper-hover-text-textDecoration:underline;--gse-ui-calendar-ctaGroup-padding:18px 24px;--gse-ui-ratingGroup-gap-md:4px;--gse-ui-ratingGroup-gap-lg:8px;--gse-ui-ratingGroup-label:#2a2a2e;--gse-ui-ratingGroup-text-fontFamily:\"Noto Sans\";--gse-ui-ratingGroup-text-fontWeight:600;--gse-ui-ratingGroup-text-fontSize:12px;--gse-ui-ratingGroup-text-lineHeight:18px;--gse-ui-ratingGroup-shortened-gap:8px;--gse-ui-ratingGroup-shortened-edit-gap:4px;--gse-ui-promptInput-simple-padding:12px 16px;--gse-ui-promptInput-simple-gap:16px;--gse-ui-promptInput-simple-label-maxHeight:200px;--gse-ui-promptInput-simple-label-minHeight:32px;--gse-ui-promptInput-complex-padding:16px;--gse-ui-promptInput-complex-gap:16px;--gse-ui-promptInput-complex-lowerContainer-leftAligned-gap:4px;--gse-ui-promptInput-complex-lowerContainer-rightAligned-gap:16px;--gse-ui-promptInput-complex-label-maxHeight:160px;--gse-ui-promptInput-complex-fileContainer-gap:8px;--gse-ui-promptInput-border-default:#cad1e1;--gse-ui-promptInput-border-hover:#19327a;--gse-ui-promptInput-border-active:#102251;--gse-ui-promptInput-background:#ffffff;--gse-ui-promptInput-focus:#5476d5;--gse-ui-promptInput-borderRadius:4px;--gse-ui-promptInput-focusContainer-border-color:#5476d5;--gse-ui-promptInput-focusContainer-border-width:2px;--gse-ui-promptInput-focusContainer-border-style:solid;--gse-ui-promptInput-label-placeholder:#6a6d75;--gse-ui-promptInput-label-populated:#2a2a2e;--gse-ui-promptInput-label-text-fontFamily:\"Noto Sans\";--gse-ui-promptInput-label-text-fontWeight:400;--gse-ui-promptInput-label-text-fontSize:14px;--gse-ui-promptInput-label-text-lineHeight:20px;--gse-ui-promptInput-divider:#dce1ed;--gse-ui-promptInput-cautionMessage-default:#4f5157;--gse-ui-promptInput-cautionMessage-text-fontFamily:\"Noto Sans\";--gse-ui-promptInput-cautionMessage-text-fontWeight:400;--gse-ui-promptInput-cautionMessage-text-fontSize:10px;--gse-ui-promptInput-cautionMessage-text-lineHeight:14px;--gse-ui-promptInput-cautionMessage-link-fontFamily:\"Noto Sans\";--gse-ui-promptInput-cautionMessage-link-fontWeight:600;--gse-ui-promptInput-cautionMessage-link-fontSize:10px;--gse-ui-promptInput-cautionMessage-link-lineHeight:14px;--gse-ui-promptInput-cautionMessage-link-textDecoration:underline;--gse-ui-promptInput-default-border-color:#cad1e1;--gse-ui-promptInput-default-border-width:1px;--gse-ui-promptInput-default-border-style:solid;--gse-ui-promptInput-hover-border-color:#19327a;--gse-ui-promptInput-hover-border-width:1px;--gse-ui-promptInput-hover-border-style:solid;--gse-ui-promptInput-active-border-color:#102251;--gse-ui-promptInput-active-border-width:1px;--gse-ui-promptInput-active-border-style:solid;--gse-ui-promptInput-gap:12px;--gse-ui-search-counter-default-foregroundColor:#6a6d75;--gse-ui-search-counter-hover-foregroundColor:#19327a;--gse-ui-search-counter-divider-border-color:#a3a8b5;--gse-ui-search-counter-divider-border-width:1px;--gse-ui-search-counter-divider-border-style:solid;--gse-ui-search-counter-divider-foregroundColor:#a3a8b5;--gse-ui-search-counter-divider-height:16px;--gse-ui-search-counter-text-fontFamily:\"Noto Sans\";--gse-ui-search-counter-text-fontWeight:400;--gse-ui-search-counter-text-fontSize:12px;--gse-ui-search-counter-text-lineHeight:18px;--gse-ui-search-counter-gap:4px;--gse-ui-search-counter-icon-height:16px;--gse-ui-search-counter-icon-width:16px;--gse-ui-search-width:320px;--gse-ui-search-match-firstLevel-backgroundColor:#81cbe5;--gse-ui-search-match-firstLevel-foregroundColour:#2a2a2e;--gse-ui-search-match-subsequentLevel-foregroundColour:#2a2a2e;--gse-ui-search-match-subsequentLevel-backgroundColor:#9fd6ea;--gse-ui-simpleFilter-gap:16px;--gse-ui-dataTableItems-header-text-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-header-text-fontWeight:700;--gse-ui-dataTableItems-header-text-fontSize:12px;--gse-ui-dataTableItems-header-text-lineHeight:18px;--gse-ui-dataTableItems-header-multiselect-default-height:40px;--gse-ui-dataTableItems-header-multiselect-default-width:41px;--gse-ui-dataTableItems-header-multiselect-default-selectedBar-height:3px;--gse-ui-dataTableItems-header-multiselect-default-selectedBar-width:41px;--gse-ui-dataTableItems-header-multiselect-compact-height:32px;--gse-ui-dataTableItems-header-multiselect-compact-width:64px;--gse-ui-dataTableItems-header-multiselect-compact-selectedBar-height:3px;--gse-ui-dataTableItems-header-multiselect-compact-selectedBar-width:64px;--gse-ui-dataTableItems-header-selectedIndicatorColor:#5476d5;--gse-ui-dataTableItems-header-defaultBackgroundColor:#ffffff;--gse-ui-dataTableItems-header-fixedBackgroundColor:#e7e9f9;--gse-ui-dataTableItems-header-foregroundColor:#2a2a2e;--gse-ui-dataTableItems-header-sort-foregroundColor:#6a6d75;--gse-ui-dataTableItems-header-default-height:40px;--gse-ui-dataTableItems-header-default-width:229px;--gse-ui-dataTableItems-header-compact-height:32px;--gse-ui-dataTableItems-header-compact-width:229px;--gse-ui-dataTableItems-header-padding:0 12px;--gse-ui-dataTableItems-header-gap:8px;--gse-ui-dataTableItems-header-selectedBar-height:3px;--gse-ui-dataTableItems-header-selectedBar-width:229px;--gse-ui-dataTableItems-divider-color:#cad1e1;--gse-ui-dataTableItems-divider-width:1px;--gse-ui-dataTableItems-divider-style:solid;--gse-ui-dataTableItems-scrollbar-borderRadius:45px;--gse-ui-dataTableItems-scrollbar-foregroundColor:#6a6d75;--gse-ui-dataTableItems-cell-altBackgroundColor:#ebedf5;--gse-ui-dataTableItems-cell-defaultBackgroundColor:#ffffff;--gse-ui-dataTableItems-cell-hoverBackgroundColor:#d5def7;--gse-ui-dataTableItems-cell-foregroundColor:#2a2a2e;--gse-ui-dataTableItems-cell-chevron-foregroundColor:#6a6d75;--gse-ui-dataTableItems-cell-multiselect-default-height:40px;--gse-ui-dataTableItems-cell-multiselect-compact-height:32px;--gse-ui-dataTableItems-cell-multiselect-padding:0 16px;--gse-ui-dataTableItems-cell-multiselect-gap:8px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-default-height:40px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-default-width:41px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-compact-height:32px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-compact-width:41px;--gse-ui-dataTableItems-cell-default-height:40px;--gse-ui-dataTableItems-cell-default-width:229px;--gse-ui-dataTableItems-cell-compact-height:32px;--gse-ui-dataTableItems-cell-compact-width:229px;--gse-ui-dataTableItems-cell-padding:0 12px;--gse-ui-dataTableItems-cell-gap:8px;--gse-ui-dataTableItems-cell-icon-foregroundColor:#2a2a2e;--gse-ui-dataTableItems-cell-text-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-cell-text-fontWeight:400;--gse-ui-dataTableItems-cell-text-fontSize:12px;--gse-ui-dataTableItems-cell-text-lineHeight:18px;--gse-ui-dataTableItems-cell-tablePagination-width:727px;--gse-ui-dataTableItems-cell-tablePagination-height:56px;--gse-ui-dataTableItems-cell-contextMenu-default-height:40px;--gse-ui-dataTableItems-cell-contextMenu-default-width:41px;--gse-ui-dataTableItems-cell-contextMenu-compact-height:32px;--gse-ui-dataTableItems-cell-contextMenu-compact-width:41px;--gse-ui-dataTableItems-editColumn-editColumnItem-gap:8px;--gse-ui-dataTableItems-editColumn-editColumnItem-foregroundColor:#4f5157;--gse-ui-dataTableItems-editColumn-editColumnItem-height:18px;--gse-ui-dataTableItems-editColumn-editColumnItem-hover-foregroundColor:#19327a;--gse-ui-dataTableItems-editColumn-editColumnItem-active-foregroundColor:#102251;--gse-ui-dataTableItems-editColumn-editColumnItem-drop-borderColor:#5476d5;--gse-ui-dataTableItems-editColumn-editColumnContent-gap:10px;--gse-ui-dataTableItems-editColumn-editColumnContent-padding:8px 0;--gse-ui-dataTableItems-tableToolbar-tableToolbarGroup-gap:4px;--gse-ui-dataTableItems-tableToolbar-gap:4px;--gse-ui-dataTableItems-tableToolbar-dividerColor:#dce1ed;--gse-ui-dataTableItems-tableToolbar-divider-width:1px;--gse-ui-dataTableItems-tableToolbar-divider-height:32px;--gse-ui-dataTableItems-tableToolbar-height:32px;--gse-ui-dataTableItems-tablePagination-recordsetControls-gap:10px;--gse-ui-dataTableItems-tablePagination-padding:12px;--gse-ui-dataTableItems-tablePagination-divider-color:#dce1ed;--gse-ui-dataTableItems-tablePagination-divider-width:1px;--gse-ui-dataTableItems-tablePagination-divider-style:solid;--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-tablePagination-defaultText-fontWeight:400;--gse-ui-dataTableItems-tablePagination-defaultText-fontSize:12px;--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight:18px;--gse-ui-dataTableItems-tablePagination-currentResultText-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight:700;--gse-ui-dataTableItems-tablePagination-currentResultText-fontSize:12px;--gse-ui-dataTableItems-tablePagination-currentResultText-lineHeight:18px;--gse-ui-dataTableItems-tablePagination-defaultBackgroundColor:#ffffff;--gse-ui-dataTableItems-tablePagination-foregroundColor:#2a2a2e;--gse-ui-dataTableItems-tablePagination-countDisplay-gap:4px;--gse-ui-dataTableItems-inlineDropdown-gap:12px;--gse-ui-dataTableItems-inlineDropdown-text:#2a2a2e;--gse-ui-dataTableItems-inlineDropdown-hover:#d5def7;--gse-ui-dataTableItems-inlineDropdown-active:#adbff0;--gse-ui-dataTableItems-inlineDropdown-borderRadius:4px;--gse-ui-dataTableItems-inlineDropdown-label-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-inlineDropdown-label-fontWeight:400;--gse-ui-dataTableItems-inlineDropdown-label-fontSize:12px;--gse-ui-dataTableItems-inlineDropdown-label-lineHeight:18px;--gse-ui-dataTableItems-inlineDropdown-chevron-hover:#19327a;--gse-ui-dataTableItems-inlineDropdown-chevron-active:#102251;--gse-ui-dataTableItems-inlineDropdown-chevron-default:#4f5157;--gse-ui-dataTableItems-statusIndicator-gap:8px;--gse-ui-dataTableItems-statusIndicator-hover:#adbff0;--gse-ui-dataTableItems-statusIndicator-borderRadius:4px;--gse-ui-dataTableItems-statusIndicator-label-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-statusIndicator-label-fontWeight:400;--gse-ui-dataTableItems-statusIndicator-label-fontSize:12px;--gse-ui-dataTableItems-statusIndicator-label-lineHeight:18px;--gse-ui-dataTableItems-statusIndicator-text:#2a2a2e;--gse-ui-avatar-groupShapes-gap:-4px;--gse-ui-avatar-large-size:96px;--gse-ui-avatar-large-badge-size:24px;--gse-ui-avatar-large-focusRing-size:98px;--gse-ui-avatar-large-content-size:84px;--gse-ui-avatar-large-initials-fontFamily:Urbanist;--gse-ui-avatar-large-initials-fontWeight:600;--gse-ui-avatar-large-initials-fontSize:36px;--gse-ui-avatar-large-initials-lineHeight:1;--gse-ui-avatar-large-presenceRing-width:4px;--gse-ui-avatar-large-ucIntegration-size:32px;--gse-ui-avatar-presenceRing-available:linear-gradient(\n    135deg,\n    #09b581 0%,\n    #9de1cd 100%\n  );--gse-ui-avatar-presenceRing-busy:linear-gradient(\n    135deg,\n    #e22245 0%,\n    #f3a7b5 100%\n  );--gse-ui-avatar-presenceRing-away:linear-gradient(\n    135deg,\n    #f8c73e 0%,\n    #fce9b2 100%\n  );--gse-ui-avatar-presenceRing-onQueue:linear-gradient(\n    135deg,\n    #2143a2 0%,\n    #a6b4da 100%\n  );--gse-ui-avatar-presenceRing-offline:linear-gradient(\n    135deg,\n    #848891 0%,\n    #cecfd3 100%\n  );--gse-ui-avatar-presenceRing-outOfOffice:linear-gradient(\n    135deg,\n    #b74ba4 0%,\n    #e2b7db 100%\n  );--gse-ui-avatar-presenceRing-plainColors-available-default:#09b581;--gse-ui-avatar-presenceRing-plainColors-available-reduced:#9de1cd;--gse-ui-avatar-presenceRing-plainColors-busy-default:#e22245;--gse-ui-avatar-presenceRing-plainColors-busy-reduced:#f3a7b5;--gse-ui-avatar-presenceRing-plainColors-away-default:#f8c73e;--gse-ui-avatar-presenceRing-plainColors-away-reduced:#fce9b2;--gse-ui-avatar-presenceRing-plainColors-onQueue-default:#2143a2;--gse-ui-avatar-presenceRing-plainColors-onQueue-reduced:#a6b4da;--gse-ui-avatar-presenceRing-plainColors-offline-default:#848891;--gse-ui-avatar-presenceRing-plainColors-offline-reduced:#cecfd3;--gse-ui-avatar-presenceRing-plainColors-outOfOffice-default:#b74ba4;--gse-ui-avatar-presenceRing-plainColors-outOfOffice-reduced:#e2b7db;--gse-ui-avatar-medium-size:48px;--gse-ui-avatar-medium-badge-size:16px;--gse-ui-avatar-medium-focusRing-size:50px;--gse-ui-avatar-medium-content-size:40px;--gse-ui-avatar-medium-initials-fontFamily:Urbanist;--gse-ui-avatar-medium-initials-lineHeight:1;--gse-ui-avatar-medium-initials-fontSize:18px;--gse-ui-avatar-medium-initials-fontWeight:600;--gse-ui-avatar-medium-presenceRing-width:3px;--gse-ui-avatar-small-size:32px;--gse-ui-avatar-small-badge-size:8px;--gse-ui-avatar-small-focusRing-size:34px;--gse-ui-avatar-small-content-size:26px;--gse-ui-avatar-small-initials-fontFamily:Urbanist;--gse-ui-avatar-small-initials-lineHeight:1;--gse-ui-avatar-small-initials-fontSize:12px;--gse-ui-avatar-small-initials-fontWeight:600;--gse-ui-avatar-small-substract-size:30px;--gse-ui-avatar-small-presenceRing-width:2px;--gse-ui-avatar-xsmall-size:24px;--gse-ui-avatar-xsmall-focusRing-size:26px;--gse-ui-avatar-xsmall-content-size:18px;--gse-ui-avatar-xsmall-initials-fontFamily:Urbanist;--gse-ui-avatar-xsmall-initials-lineHeight:1;--gse-ui-avatar-xsmall-initials-fontSize:8px;--gse-ui-avatar-xsmall-initials-fontWeight:600;--gse-ui-avatar-xsmall-presenceRing-width:2px;--gse-ui-avatar-badge-available-color:#09b581;--gse-ui-avatar-badge-busy-color:#e22245;--gse-ui-avatar-badge-busy-icon-margin:2px;--gse-ui-avatar-badge-away-color:#f8c73e;--gse-ui-avatar-badge-away-icon-margin:2px;--gse-ui-avatar-badge-onQueue-color:#2143a2;--gse-ui-avatar-badge-offline-color:#848891;--gse-ui-avatar-badge-outOfOffice:#b74ba4;--gse-ui-avatar-badge-notification-color:#ff451a;--gse-ui-avatar-badge-foregroundDefault-color:#ffffff;--gse-ui-avatar-badge-foregroundDark-color:#4f5157;--gse-ui-avatar-badge-notifications-icon-margin:4px;--gse-ui-avatar-badge-queue-icon-margin:4px;--gse-ui-avatar-media-initialsBackground-default:#263b73;--gse-ui-avatar-media-initialsBackground-accent1:#596ea6;--gse-ui-avatar-media-initialsBackground-accent2:#81cbe5;--gse-ui-avatar-media-initialsBackground-accent3:#056385;--gse-ui-avatar-media-initialsBackground-accent4:#467aae;--gse-ui-avatar-media-initialsBackground-accent5:#9ac1e8;--gse-ui-avatar-media-initialsBackground-accent6:#b2b7c4;--gse-ui-avatar-media-initialsBackground-accent7:#89387b;--gse-ui-avatar-media-initialsBackground-accent8:#ff5c77;--gse-ui-avatar-media-initialsBackground-accent9:#ff9dad;--gse-ui-avatar-media-initialsBackground-accent10:#ffc650;--gse-ui-avatar-media-initialsBackground-accent11:#ffb5a3;--gse-ui-avatar-media-initialsBackground-accent12:#992910;--gse-ui-avatar-media-initialsBackground-overflowCount:#b2b7c4;--gse-ui-avatar-media-initialsBackground-add:#e7e9f9;--gse-ui-avatar-media-initialsForeground-default:#2a2a2e;--gse-ui-avatar-media-initialsForeground-inverse:#ffffff;--gse-ui-avatar-media-initialsForeground-add:#2143a2;--gse-ui-avatar-hoverModal-shroudColor:#263b73a3;--gse-ui-avatar-hoverModal-foregroundColor:#ffffff;--gse-ui-avatar-hoverModal-opacity:0.64;--gse-ui-avatar-content-borderRadius:100%;--gse-ui-avatar-content-default-border-color:#ffffff;--gse-ui-avatar-content-default-border-width:1px;--gse-ui-avatar-content-default-border-style:solid;--gse-ui-avatar-content-large-border-color:#ffffff;--gse-ui-avatar-content-large-border-width:2px;--gse-ui-avatar-content-large-border-style:solid;--gse-ui-avatar-groupSet-gap:-2px;--gse-ui-avatar-focusRing-large-borderRadius:100%;--gse-ui-avatar-focusRing-large-border-color:#5476d5;--gse-ui-avatar-focusRing-large-border-width:2px;--gse-ui-avatar-focusRing-large-border-style:solid;--gse-ui-avatar-focusRing-mediumSmall-borderRadius:100%;--gse-ui-avatar-focusRing-medium-border-color:#5476d5;--gse-ui-avatar-focusRing-medium-border-width:2px;--gse-ui-avatar-focusRing-medium-border-style:solid;--gse-ui-avatar-focusRing-small-border-color:#5476d5;--gse-ui-avatar-focusRing-small-border-width:2px;--gse-ui-avatar-focusRing-small-border-style:solid;--gse-ui-avatar-focusRing-xsmall-border-color:#5476d5;--gse-ui-avatar-focusRing-xsmall-border-width:2px;--gse-ui-avatar-focusRing-xsmall-border-style:solid;--gse-ui-avatar-focus:#5476d5;--gse-ui-avatar-addChangeImage-hoverModal-shroudSize:84px;--gse-ui-avatar-addChangeImage-icon-size:16px;--gse-ui-dataTableComposed-boxShadow:0 0 4px 1px #2a2a2e26;--gse-ui-dataTableComposed-width:1440px;--gse-ui-focus-color:#5476d5;--gse-ui-focus-width:2px;--gse-ui-focus-style:solid;--gse-ui-dataTable-border-color:#cad1e1;--gse-ui-dataTable-border-width:1px;--gse-ui-dataTable-border-style:solid;--gse-ui-tabs-item-height:40px;--gse-ui-tabs-item-horizontal-fixedHeight:40px;--gse-ui-tabs-item-horizontal-padding:11px 12px 10px;--gse-ui-tabs-item-disableOpacity:0.5;--gse-ui-tabs-item-itemText-fontFamily:\"Noto Sans\";--gse-ui-tabs-item-itemText-fontWeight:400;--gse-ui-tabs-item-itemText-fontSize:12px;--gse-ui-tabs-item-itemText-lineHeight:18px;--gse-ui-tabs-item-itemTextColor:#2a2a2e;--gse-ui-tabs-item-divider-horizontal-height:1px;--gse-ui-tabs-item-divider-vertical-height:40px;--gse-ui-tabs-item-divider-vertical-width:1px;--gse-ui-tabs-item-divider-dividerColor:#dce1ed;--gse-ui-tabs-item-indicator-vertical-height:40px;--gse-ui-tabs-item-indicator-vertical-width:2px;--gse-ui-tabs-item-indicator-horizontal-height:2px;--gse-ui-tabs-item-indicator-hoverColor:#2143a2;--gse-ui-tabs-item-indicator-activeColor:#19327a;--gse-ui-tabs-item-icon-iconColor:#2a2a2e;--gse-ui-tabs-item-icon-size:16px;--gse-ui-tabs-item-gap:8px;--gse-ui-tabs-item-vertical-fixedHeight:40px;--gse-ui-tabs-item-vertical-padding:11px 9px 10px 12px;--gse-ui-tabs-item-focusRing-offset:1px;--gse-ui-tabs-set-vertical-height:360px;--gse-ui-tabs-set-vertical-width:98px;--gse-ui-tabs-set-vertical-marginRight:16px;--gse-ui-tabs-set-horizontal-width:800px;--gse-ui-tabs-set-horizontal-height:40px;--gse-ui-tabs-set-horizontal-marginBottom:16px;--gse-ui-tabs-set-gap:-1px;--gse-ui-tabs-set-divider-horizontal-height:1px;--gse-ui-tabs-set-divider-vertical-width:1px;--gse-ui-tabs-focusRing-border-color:#5476d5;--gse-ui-tabs-focusRing-border-width:2px;--gse-ui-tabs-focusRing-border-style:solid;--gse-ui-tabs-focusRing-borderRadius:4px;--gse-ui-advancedTabs-divider-dividerColor:#dce1ed;--gse-ui-advancedTabs-item-padding:11px 12px 10px;--gse-ui-advancedTabs-item-gap:8px;--gse-ui-advancedTabs-item-focus-borderRadius:8px;--gse-ui-advancedTabs-item-focus-border-color:#5476d5;--gse-ui-advancedTabs-item-focus-border-width:2px;--gse-ui-advancedTabs-item-focus-border-style:solid;--gse-ui-advancedTabs-item-backgroundColor:#ffffff;--gse-ui-advancedTabs-item-borderRadius:4px 4px 0 0;--gse-ui-advancedTabs-item-height:48px;--gse-ui-advancedTabs-item-width:151px;--gse-ui-advancedTabs-item-focusItem-height:53px;--gse-ui-advancedTabs-item-focusItem-width:126px;--gse-ui-advancedTabs-item-divider-bottom-height:1px;--gse-ui-advancedTabs-item-divider-right-height:32px;--gse-ui-advancedTabs-item-divider-right-width:1px;--gse-ui-advancedTabs-item-divider-border-color:#dce1ed;--gse-ui-advancedTabs-item-divider-border-width:1px;--gse-ui-advancedTabs-item-divider-border-style:solid;--gse-ui-advancedTabs-item-text-color:#2a2a2e;--gse-ui-advancedTabs-item-text-height:9px;--gse-ui-advancedTabs-item-indicator-hoverColor:#2143a2;--gse-ui-advancedTabs-item-indicator-activeColor:#19327a;--gse-ui-advancedTabs-item-indicator-height:2px;--gse-ui-advancedTabs-item-icon-iconColor:#2a2a2e;--gse-ui-advancedTabs-item-icon-size:16px;--gse-ui-advancedTabs-item-menuButton-gap:4px;--gse-ui-advancedTabs-item-menuButton-height:45px;--gse-ui-advancedTabs-item-menuButton-width:32px;--gse-ui-advancedTabs-item-menuButton-defaultColor:#4f5157;--gse-ui-advancedTabs-item-menuButton-activeColor:#2a2a2e;--gse-ui-advancedTabs-item-menuButton-focus-height:53px;--gse-ui-advancedTabs-item-menuButton-focus-width:40px;--gse-ui-advancedTabs-item-itemText-fontFamily:\"Noto Sans\";--gse-ui-advancedTabs-item-itemText-fontWeight:400;--gse-ui-advancedTabs-item-itemText-fontSize:12px;--gse-ui-advancedTabs-item-itemText-lineHeight:18px;--gse-ui-advancedTabs-item-disabled-opacity:0.5;--gse-ui-advancedTabs-button-add-height:45px;--gse-ui-advancedTabs-button-arrow-height:48px;--gse-ui-advancedTabs-set-backgroundColor:#f5f6fa;--gse-ui-advancedTabs-set-standard-width:920px;--gse-ui-treeView-item-comfy-parent-padding:0px 0px 0px 8px;--gse-ui-treeView-item-comfy-child-defaultPadding:0px 0px 0px 32px;--gse-ui-treeView-item-comfy-child-selectedPadding:0px 0px 0px 24px;--gse-ui-treeView-item-comfy-leftAligned-padding:8px 4px 8px 28px;--gse-ui-treeView-item-comfy-outerGap:2px;--gse-ui-treeView-item-comfy-grandchild-defaultPadding:0px 0px 0px 56px;--gse-ui-treeView-item-comfy-grandchild-selectedPadding:0px 0px 0px 48px;--gse-ui-treeView-item-comfy-greatGrandchild-defaultPadding:0px 0px 0px 80px;--gse-ui-treeView-item-comfy-greatGrandchild-selectedPadding:0px 0px 0px 72px;--gse-ui-treeView-item-comfy-rightAligned-padding:8px 4px;--gse-ui-treeView-item-comfy-header-padding:8px 4px;--gse-ui-treeView-item-internalGap:8px;--gse-ui-treeView-item-compact-parent-padding:0px 0px 0px 8px;--gse-ui-treeView-item-compact-child-defaultPadding:0px 0px 0px 32px;--gse-ui-treeView-item-compact-child-selectedPadding:0px 0px 0px 24px;--gse-ui-treeView-item-compact-leftAligned-padding:4px 4px 4px 28px;--gse-ui-treeView-item-compact-outerGap:4px;--gse-ui-treeView-item-compact-grandchild-defaultPadding:0px 0px 0px 56px;--gse-ui-treeView-item-compact-grandchild-selectedPadding:0px 0px 0px 48px;--gse-ui-treeView-item-compact-greatGrandchild-defaultPadding:0px 0px 0px\n    80px;--gse-ui-treeView-item-compact-greatGrandchild-selectedPadding:0px 0px 0px\n    72px;--gse-ui-treeView-item-compact-rightAligned-padding:4px;--gse-ui-treeView-item-compact-heading-padding:4px;--gse-ui-treeView-group-gap:8px;--gse-ui-treeView-group-comfy-padding:8px 12px;--gse-ui-treeView-group-compact-padding:8px;--gse-ui-treeView-selectionBookmark-comfy-height:36px;--gse-ui-treeView-selectionBookmark-comfy-width:6px;--gse-ui-treeView-selectionBookmark-compact-height:26px;--gse-ui-treeView-selectionBookmark-compact-width:4px;--gse-ui-treeView-selectionBookmark-highEmphasis:#2143a2;--gse-ui-treeView-selectionBookmark-midEmphasis:#d5def7;--gse-ui-treeView-borderRadius:4px;--gse-ui-treeView-comfy-label-fontFamily:\"Noto Sans\";--gse-ui-treeView-comfy-label-fontWeight:400;--gse-ui-treeView-comfy-label-fontSize:14px;--gse-ui-treeView-comfy-label-lineHeight:20px;--gse-ui-treeView-compact-label-fontFamily:\"Noto Sans\";--gse-ui-treeView-compact-label-fontWeight:400;--gse-ui-treeView-compact-label-fontSize:12px;--gse-ui-treeView-compact-label-lineHeight:18px;--gse-ui-treeView-quantityMeter-fontFamily:\"Noto Sans\";--gse-ui-treeView-quantityMeter-fontWeight:400;--gse-ui-treeView-quantityMeter-fontSize:12px;--gse-ui-treeView-quantityMeter-lineHeight:18px;--gse-ui-treeView-groupHeader-heading-fontFamily:Urbanist;--gse-ui-treeView-groupHeader-heading-fontWeight:600;--gse-ui-treeView-groupHeader-heading-fontSize:16px;--gse-ui-treeView-groupHeader-heading-lineHeight:24px;--gse-ui-treeView-groupHeader-meterTitle-fontFamily:\"Noto Sans\";--gse-ui-treeView-groupHeader-meterTitle-fontWeight:600;--gse-ui-treeView-groupHeader-meterTitle-fontSize:12px;--gse-ui-treeView-groupHeader-meterTitle-lineHeight:18px;--gse-ui-treeView-groupHeader-gap:12px;--gse-ui-treeView-groupHeader-subHeading-gap:8px;--gse-ui-treeView-disableOpacity:0.5;--gse-ui-treeView-label:#2a2a2e;--gse-ui-treeView-background-hover:#e7e9f9;--gse-ui-treeView-background-selected:#d5def7;--gse-ui-treeView-background-open:#f5f6fa;--gse-ui-toast-closeButtonColor:#4f5157;--gse-ui-toast-success-backgroundColor:#ffffff;--gse-ui-toast-success-foregroundColor:#2a2a2e;--gse-ui-toast-success-iconColor:#056d4d;--gse-ui-toast-warning-backgroundColor:#ffffff;--gse-ui-toast-warning-foregroundColor:#2a2a2e;--gse-ui-toast-warning-iconColor:#9a7b25;--gse-ui-toast-info-backgroundColor:#ffffff;--gse-ui-toast-info-foregroundColor:#2a2a2e;--gse-ui-toast-info-iconColor:#3d538f;--gse-ui-toast-action-backgroundColor:#ffffff;--gse-ui-toast-action-foregroundColor:#2a2a2e;--gse-ui-toast-action-iconColor:#2143a2;--gse-ui-toast-error-backgroundColor:#ffffff;--gse-ui-toast-error-foregroundColor:#2a2a2e;--gse-ui-toast-error-iconColor:#b51b37;--gse-ui-toast-heading-fontFamily:Urbanist;--gse-ui-toast-heading-fontWeight:700;--gse-ui-toast-heading-fontSize:16px;--gse-ui-toast-heading-lineHeight:24px;--gse-ui-toast-text-fontFamily:\"Noto Sans\";--gse-ui-toast-text-fontWeight:400;--gse-ui-toast-text-fontSize:14px;--gse-ui-toast-text-lineHeight:20px;--gse-ui-toast-margin:16px;--gse-ui-toast-gap:12px;--gse-ui-toast-gapText:4px;--gse-ui-toast-gapButton:16px;--gse-ui-toast-buttonBar-gap:8px;--gse-ui-toast-borderRadius:4px;--gse-ui-toast-boxShadow:0 0 4px 1px #2a2a2e26;--gse-ui-toast-icon:24px;--gse-ui-toast-wrappingWidth:320px;--gse-ui-toast-stacking-gap:4px;--gse-ui-toast-messageWidth:220px;--gse-ui-modal-closeButtonColor:#4f5157;--gse-ui-modal-headerColor:#2a2a2e;--gse-ui-modal-backgroundColor:#ffffff;--gse-ui-modal-shroudColor:#263b73a3;--gse-ui-modal-header-gap:12px;--gse-ui-modal-padding:32px;--gse-ui-modal-gap:16px;--gse-ui-modal-heading-fontFamily:Urbanist;--gse-ui-modal-heading-fontWeight:700;--gse-ui-modal-heading-fontSize:24px;--gse-ui-modal-heading-lineHeight:32px;--gse-ui-modal-icon:32px;--gse-ui-modal-small-width:420px;--gse-ui-modal-medium-width:680px;--gse-ui-modal-large-width:800px;--gse-ui-modal-buttonBar-gap:8px;--gse-ui-modal-boxShadow:0 0 8px 1px #2a2a2e26;--gse-ui-modal-borderRadius:8px;--gse-ui-modal-shroud-opacity:0.64;--gse-ui-modal-dismissButton-paddingTop:16px;--gse-ui-modal-dismissButton-paddingRight:8px;--gse-ui-popover-borderRadius:4px;--gse-ui-popover-boxShadow:0 0 8px 1px #2a2a2e26;--gse-ui-popover-closeButtonColor:#4f5157;--gse-ui-popover-headerColor:#2a2a2e;--gse-ui-popover-backgroundColor:#ffffff;--gse-ui-popover-gap:16px;--gse-ui-popover-padding:24px;--gse-ui-popover-buttonsBar-gap:8px;--gse-ui-popover-header-gap:4px;--gse-ui-popover-spacer-height:16px;--gse-ui-popover-body-text-fontFamily:\"Noto Sans\";--gse-ui-popover-body-text-fontWeight:400;--gse-ui-popover-body-text-fontSize:14px;--gse-ui-popover-body-text-lineHeight:20px;--gse-ui-popover-title-text-fontFamily:Urbanist;--gse-ui-popover-title-text-fontWeight:700;--gse-ui-popover-title-text-fontSize:16px;--gse-ui-popover-title-text-lineHeight:24px;--gse-ui-popover-anchor-width:20px;--gse-ui-popover-anchor-height:8px;--gse-ui-progressAndLoading-spinner-foreground:#2143a2;--gse-ui-progressAndLoading-spinner-base:#d5def7;--gse-ui-progressAndLoading-spinner-large:48px;--gse-ui-progressAndLoading-spinner-small:16px;--gse-ui-progressAndLoading-spinner-text-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-spinner-text-fontWeight:600;--gse-ui-progressAndLoading-spinner-text-fontSize:12px;--gse-ui-progressAndLoading-spinner-text-lineHeight:18px;--gse-ui-progressAndLoading-textColor:#2a2a2e;--gse-ui-progressAndLoading-loadingState-large-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-loadingState-large-header-fontWeight:700;--gse-ui-progressAndLoading-loadingState-large-header-fontSize:24px;--gse-ui-progressAndLoading-loadingState-large-header-lineHeight:32px;--gse-ui-progressAndLoading-loadingState-large-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-loadingState-large-subheader-fontWeight:600;--gse-ui-progressAndLoading-loadingState-large-subheader-fontSize:16px;--gse-ui-progressAndLoading-loadingState-large-subheader-lineHeight:24px;--gse-ui-progressAndLoading-loadingState-large-width:600px;--gse-ui-progressAndLoading-loadingState-medium-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-loadingState-medium-header-fontWeight:700;--gse-ui-progressAndLoading-loadingState-medium-header-fontSize:18px;--gse-ui-progressAndLoading-loadingState-medium-header-lineHeight:27px;--gse-ui-progressAndLoading-loadingState-medium-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-loadingState-medium-subheader-fontWeight:600;--gse-ui-progressAndLoading-loadingState-medium-subheader-fontSize:14px;--gse-ui-progressAndLoading-loadingState-medium-subheader-lineHeight:20px;--gse-ui-progressAndLoading-loadingState-medium-width:400px;--gse-ui-progressAndLoading-loadingState-small-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-loadingState-small-header-fontWeight:700;--gse-ui-progressAndLoading-loadingState-small-header-fontSize:16px;--gse-ui-progressAndLoading-loadingState-small-header-lineHeight:24px;--gse-ui-progressAndLoading-loadingState-small-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-loadingState-small-subheader-fontWeight:600;--gse-ui-progressAndLoading-loadingState-small-subheader-fontSize:12px;--gse-ui-progressAndLoading-loadingState-small-subheader-lineHeight:18px;--gse-ui-progressAndLoading-loadingState-small-width:200px;--gse-ui-progressAndLoading-large-gap:24px;--gse-ui-progressAndLoading-large-gapText:4px;--gse-ui-progressAndLoading-pageLoading-gap:-3px;--gse-ui-progressAndLoading-medium-gap:16px;--gse-ui-progressAndLoading-medium-gapText:4px;--gse-ui-progressAndLoading-small-gap:12px;--gse-ui-progressAndLoading-small-gapText:4px;--gse-ui-progressAndLoading-blankState-large-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-blankState-large-header-fontWeight:700;--gse-ui-progressAndLoading-blankState-large-header-fontSize:18px;--gse-ui-progressAndLoading-blankState-large-header-lineHeight:27px;--gse-ui-progressAndLoading-blankState-large-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-blankState-large-subheader-fontWeight:600;--gse-ui-progressAndLoading-blankState-large-subheader-fontSize:14px;--gse-ui-progressAndLoading-blankState-large-subheader-lineHeight:20px;--gse-ui-progressAndLoading-blankState-small-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-blankState-small-header-fontWeight:700;--gse-ui-progressAndLoading-blankState-small-header-fontSize:14px;--gse-ui-progressAndLoading-blankState-small-header-lineHeight:24px;--gse-ui-progressAndLoading-blankState-small-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-blankState-small-subheader-fontWeight:600;--gse-ui-progressAndLoading-blankState-small-subheader-fontSize:12px;--gse-ui-progressAndLoading-blankState-small-subheader-lineHeight:18px;--gse-ui-progressAndLoading-largeBorder:4px;--gse-ui-progressAndLoading-smallBorder:2px;--gse-ui-progressAndLoading-thinBorder:1px;--gse-ui-blankState-small-width:250px;--gse-ui-blankState-small-maxWidth:569px;--gse-ui-blankState-large-minWidth:570px;--gse-ui-blankState-icon-size-sm:32px;--gse-ui-blankState-icon-size-lg:42px;--gse-ui-blankState-padding:32px 16px;--gse-ui-blankState-gapMessage:4px;--gse-ui-blankState-gapMain:12px;--gse-ui-blankState-gapContent:24px;--gse-ui-blankState-iconColor:#6a6d75;--gse-ui-blankState-foregroundColor:#2a2a2e;--gse-ui-accordion-header-height:40px;--gse-ui-accordion-header-padding:8px 16px 8px 16px;--gse-ui-accordion-header-chevronIcon:16px;--gse-ui-accordion-header-gap:8px;--gse-ui-accordion-header-default-foreground-labelColor:#2a2a2e;--gse-ui-accordion-header-default-foreground-chevronIcon-closed:#4f5157;--gse-ui-accordion-header-default-foreground-chevronIcon-open:#2a2a2e;--gse-ui-accordion-header-default-foreground-chevronIcon-hover:#3e4044;--gse-ui-accordion-header-label-defaultText-fontFamily:\"Noto Sans\";--gse-ui-accordion-header-label-defaultText-fontWeight:700;--gse-ui-accordion-header-label-defaultText-fontSize:14px;--gse-ui-accordion-header-label-defaultText-lineHeight:20px;--gse-ui-accordion-reversedHeader-padding:2px;--gse-ui-accordion-menuItem-height:32px;--gse-ui-accordion-menuItem-padding:0 12px 0 24px;--gse-ui-accordion-menuItem-startIcon:16px;--gse-ui-accordion-menuItem-parentIcon:16px;--gse-ui-accordion-menuItem-gap:8px;--gse-ui-accordion-menuItem-default-foreground-startIconColor:#2a2a2e;--gse-ui-accordion-menuItem-default-foreground-labelColor:#2a2a2e;--gse-ui-accordion-menuItem-default-foreground-startShortcutColor:#6a6d75;--gse-ui-accordion-menuItem-default-foreground-parentIconColor:#4f5157;--gse-ui-accordion-menuItem-hover-foreground-startIconColor:#2a2a2e;--gse-ui-accordion-menuItem-hover-foreground-labelColor:#2a2a2e;--gse-ui-accordion-menuItem-hover-foreground-startShortcutColor:#6a6d75;--gse-ui-accordion-menuItem-hover-foreground-parentIconColor:#3e4044;--gse-ui-accordion-menuItem-hover-backgroundColor:#e7e9f9;--gse-ui-accordion-menuItem-selected-foreground-startIconColor:#2a2a2e;--gse-ui-accordion-menuItem-selected-foreground-labelColor:#2a2a2e;--gse-ui-accordion-menuItem-selected-foreground-startShortcutColor:#2a2a2e;--gse-ui-accordion-menuItem-selected-foreground-parentIconColor:#2a2a2e;--gse-ui-accordion-menuItem-selected-backgroundColor:#d5def7;--gse-ui-accordion-menuItem-focus-borderRadius:4px;--gse-ui-accordion-menuItem-label-defaultText-fontFamily:\"Noto Sans\";--gse-ui-accordion-menuItem-label-defaultText-fontWeight:400;--gse-ui-accordion-menuItem-label-defaultText-fontSize:12px;--gse-ui-accordion-menuItem-label-defaultText-lineHeight:18px;--gse-ui-accordion-menuItem-label-selectedText-fontFamily:\"Noto Sans\";--gse-ui-accordion-menuItem-label-selectedText-fontWeight:600;--gse-ui-accordion-menuItem-label-selectedText-fontSize:12px;--gse-ui-accordion-menuItem-label-selectedText-lineHeight:18px;--gse-ui-accordion-menuItem-shortcut-text-fontFamily:\"Noto Sans\";--gse-ui-accordion-menuItem-shortcut-text-fontWeight:400;--gse-ui-accordion-menuItem-shortcut-text-fontSize:14px;--gse-ui-accordion-menuItem-shortcut-text-lineHeight:20px;--gse-ui-accordion-focusBorder-color:#5476d5;--gse-ui-accordion-focusBorder-style:solid;--gse-ui-accordion-focusBorder-width:2px;--gse-ui-accordion-contentItem-padding:16px;--gse-ui-accordion-contentItem-gap:16px;--gse-ui-accordion-contentItem-foregroundColor:#2a2a2e;--gse-ui-accordion-contentItem-backgroundColor:#ffffff;--gse-ui-accordion-contentItem-defaultText-fontFamily:\"Noto Sans\";--gse-ui-accordion-contentItem-defaultText-fontWeight:400;--gse-ui-accordion-contentItem-defaultText-fontSize:12px;--gse-ui-accordion-contentItem-defaultText-lineHeight:18px;--gse-ui-accordion-wrapper-dividerBorder-color:#dce1ed;--gse-ui-accordion-wrapper-dividerBorder-width:1px;--gse-ui-accordion-wrapper-dividerBorder-style:solid;--gse-ui-accordion-focus-offset-gap:1px;--gse-ui-accordion-contentPanel-paddingBottom:8px;--gse-ui-accordion-label-disabled-opacity:0.5;--gse-ui-rte-codeBlock-backgroundColor:#ebedf5;--gse-ui-rte-codeBlock-border-color:#dce1ed;--gse-ui-rte-codeBlock-border-width:1px;--gse-ui-rte-codeBlock-border-style:solid;--gse-ui-rte-codeBlock-padding:12px 8px;--gse-ui-rte-codeBlock-foregroundColor:#4f5157;--gse-ui-rte-codeBlock-sm-regular-fontFamily:\"Noto Sans Mono\";--gse-ui-rte-codeBlock-sm-regular-fontSize:12px;--gse-ui-rte-codeBlock-sm-regular-lineHeight:16px;--gse-ui-rte-codeBlock-sm-regular-fontWeight:400;--gse-ui-rte-codeBlock-borderRadius:4px;--gse-ui-rte-quoteBlock-margin:0 24px;--gse-ui-rte-quoteBlock-container-gap:8px;--gse-ui-rte-quoteBlock-foregroundColor:#4f5157;--gse-ui-rte-quoteBlock-md-regular-fontFamily:\"Noto Sans\";--gse-ui-rte-quoteBlock-md-regular-fontWeight:400;--gse-ui-rte-quoteBlock-md-regular-fontSize:14px;--gse-ui-rte-quoteBlock-md-regular-lineHeight:20px;--gse-ui-rte-quoteBlock-borderLeft-color:#829ce5;--gse-ui-rte-quoteBlock-borderLeft-width:2px;--gse-ui-rte-heading_1-foregroundColor:#4f5157;--gse-ui-rte-heading_1-semiBold-fontFamily:Urbanist;--gse-ui-rte-heading_1-semiBold-fontWeight:600;--gse-ui-rte-heading_1-semiBold-fontSize:24px;--gse-ui-rte-heading_1-semiBold-lineHeight:32px;--gse-ui-rte-heading_2-foregroundColor:#4f5157;--gse-ui-rte-heading_2-semiBold-fontFamily:Urbanist;--gse-ui-rte-heading_2-semiBold-fontWeight:600;--gse-ui-rte-heading_2-semiBold-fontSize:18px;--gse-ui-rte-heading_2-semiBold-lineHeight:27px;--gse-ui-rte-heading_3-foregroundColor:#4f5157;--gse-ui-rte-heading_3-semiBold-fontFamily:Urbanist;--gse-ui-rte-heading_3-semiBold-fontWeight:600;--gse-ui-rte-heading_3-semiBold-fontSize:16px;--gse-ui-rte-heading_3-semiBold-lineHeight:24px;--gse-ui-rte-paragraph-foregroundColor:#4f5157;--gse-ui-rte-paragraph-md-regular-fontFamily:\"Noto Sans\";--gse-ui-rte-paragraph-md-regular-fontWeight:400;--gse-ui-rte-paragraph-md-regular-fontSize:14px;--gse-ui-rte-paragraph-md-regular-lineHeight:20px;--gse-ui-rte-divider-width:1px;--gse-ui-rte-divider-height:20px;--gse-ui-rte-innerContainer-gap:16px;--gse-ui-rte-contentContainer-gap:16px;--gse-ui-rte-padding:8px 16px 16px;--gse-ui-rte-menuButton-height:24px;--gse-ui-rte-colorSwatch-orange-default:#ff8f76;--gse-ui-rte-colorSwatch-coral-default:#ffbec9;--gse-ui-rte-colorSwatch-pear-default:#c6dd98;--gse-ui-rte-colorSwatch-mango-default:#ffd173;--gse-ui-rte-colorSwatch-raspberry-default:#f5bfeb;--gse-ui-rte-colorSwatch-azure-default:#adbff0;--gse-ui-rte-colorSwatch-mineral-default:#bcd6f0;--gse-ui-rte-colorSwatch-island-default:#81cbe5;--gse-ui-rte-colorSwatch-width:20px;--gse-ui-rte-colorSwatch-height:20px;--gse-ui-rte-colorSwatch-focusBorder-color:#5476d5;--gse-ui-rte-colorSwatch-focusBorder-width:2px;--gse-ui-rte-colorSwatch-focusBorder-style:solid;--gse-ui-rte-colorPalette-gap:8px;--gse-ui-rte-colorPalette-padding:4px 12px;--gse-ui-rte-toolbarBtnGroup-gap:4px;--gse-ui-rte-toolbar-divider-color:#dce1ed;--gse-ui-rte-toolbar-divider-margin:6px 4px;--gse-ui-rte-container-borderRadius:4px;--gse-ui-rte-mainContainer-default-border-color:#a3a8b5;--gse-ui-rte-mainContainer-default-border-width:1px;--gse-ui-rte-mainContainer-default-border-style:solid;--gse-ui-rte-mainContainer-hover-border-color:#19327a;--gse-ui-rte-mainContainer-hover-border-width:1px;--gse-ui-rte-mainContainer-hover-border-style:solid;--gse-ui-rte-mainContainer-active-border-color:#102251;--gse-ui-rte-mainContainer-active-border-width:1px;--gse-ui-rte-mainContainer-active-border-style:solid;--gse-ui-rte-mainContainer-disabled-border-color:#a3a8b5;--gse-ui-rte-mainContainer-disabled-border-width:1px;--gse-ui-rte-mainContainer-disabled-border-style:solid;--gse-ui-rte-mainContainer-focus-border-color:#5476d5;--gse-ui-rte-mainContainer-focus-border-width:2px;--gse-ui-rte-mainContainer-focus-border-style:solid;--gse-ui-rte-rteMenu-backgroundColor:#ffffff;--gse-ui-rte-rteMenu-border-color:#c1c6d4;--gse-ui-rte-rteMenu-border-width:1px;--gse-ui-rte-rteMenu-border-style:solid;--gse-ui-sidePanel-backgroundColor:#ffffff;--gse-ui-sidePanel-headerColor:#2a2a2e;--gse-ui-sidePanel-boxShadow:0 0 6px 1px #2a2a2e26;--gse-ui-sidePanel-descriptionColor:#4f5157;--gse-ui-sidePanel-heading-text-fontFamily:Urbanist;--gse-ui-sidePanel-heading-text-fontWeight:600;--gse-ui-sidePanel-heading-text-fontSize:18px;--gse-ui-sidePanel-heading-text-lineHeight:27px;--gse-ui-sidePanel-description-text-fontFamily:\"Noto Sans\";--gse-ui-sidePanel-description-text-fontWeight:400;--gse-ui-sidePanel-description-text-fontSize:12px;--gse-ui-sidePanel-description-text-lineHeight:18px;--gse-ui-sidePanel-description-padding:16px 24px 0;--gse-ui-sidePanel-header-iconGap:12px;--gse-ui-sidePanel-header-padding:24px 24px 16px;--gse-ui-sidePanel-header-dismiss-padding:4px;--gse-ui-sidePanel-body-padding:24px;--gse-ui-sidePanel-footer-padding:16px 24px;--gse-ui-sidePanel-widthSize-sm:400px;--gse-ui-sidePanel-widthSize-md:560px;--gse-ui-sidePanel-widthSize-lg:960px;--gse-ui-sidePanel-shroud-opacity:0.64;--gse-ui-sidePanel-shroudColor:#263b73a3;--gse-ui-sidePanel-divider-color:#dce1ed;--gse-ui-sidePanel-divider-width:1px;--gse-ui-sidePanel-divider-style:solid;--gse-ui-sidePanel-shoud-minWidth:32px;--gse-ui-charts-areaChart-point-pointFill-default:#ffffff;--gse-ui-charts-areaChart-point-pointFill-category1:#056385;--gse-ui-charts-areaChart-point-pointFill-category10:#263b73;--gse-ui-charts-areaChart-point-pointFill-category2:#5798d9;--gse-ui-charts-areaChart-point-pointFill-category3:#ac75ff;--gse-ui-charts-areaChart-point-pointFill-category4:#89387b;--gse-ui-charts-areaChart-point-pointFill-category5:#ff5c77;--gse-ui-charts-areaChart-point-pointFill-category6:#ffb5a3;--gse-ui-charts-areaChart-point-pointFill-category7:#ffc650;--gse-ui-charts-areaChart-point-pointFill-category8:#c6dd98;--gse-ui-charts-areaChart-point-pointFill-category9:#54c6ab;--gse-ui-charts-areaChart-point-pointOutline-category1:#056385;--gse-ui-charts-areaChart-point-pointOutline-category10:#263b73;--gse-ui-charts-areaChart-point-pointOutline-category2:#5798d9;--gse-ui-charts-areaChart-point-pointOutline-category3:#ac75ff;--gse-ui-charts-areaChart-point-pointOutline-category4:#89387b;--gse-ui-charts-areaChart-point-pointOutline-category5:#ff5c77;--gse-ui-charts-areaChart-point-pointOutline-category6:#ffb5a3;--gse-ui-charts-areaChart-point-pointOutline-category7:#ffc650;--gse-ui-charts-areaChart-point-pointOutline-category8:#c6dd98;--gse-ui-charts-areaChart-point-pointOutline-category9:#54c6ab;--gse-ui-charts-areaChart-line-category1-default:#056385;--gse-ui-charts-areaChart-line-category1-reduced:#05638540;--gse-ui-charts-areaChart-line-category10-default:#263b73;--gse-ui-charts-areaChart-line-category10-reduced:#263b7340;--gse-ui-charts-areaChart-line-category2-default:#5798d9;--gse-ui-charts-areaChart-line-category2-reduced:#5798d940;--gse-ui-charts-areaChart-line-category3-default:#ac75ff;--gse-ui-charts-areaChart-line-category3-reduced:#ac75ff40;--gse-ui-charts-areaChart-line-category4-default:#89387b;--gse-ui-charts-areaChart-line-category4-reduced:#89387b40;--gse-ui-charts-areaChart-line-category5-default:#ff5c77;--gse-ui-charts-areaChart-line-category5-reduced:#ff5c7740;--gse-ui-charts-areaChart-line-category6-default:#ffb5a3;--gse-ui-charts-areaChart-line-category6-reduced:#ffb5a340;--gse-ui-charts-areaChart-line-category7-default:#ffc650;--gse-ui-charts-areaChart-line-category7-reduced:#ffc65040;--gse-ui-charts-areaChart-line-category8-default:#c6dd98;--gse-ui-charts-areaChart-line-category8-reduced:#c6dd9840;--gse-ui-charts-areaChart-line-category9-default:#54c6ab;--gse-ui-charts-areaChart-line-category9-reduced:#54c6ab40;--gse-ui-charts-areaChart-shading-category1-default:#82b1c2;--gse-ui-charts-areaChart-shading-category1-reduced:#82b1c240;--gse-ui-charts-areaChart-shading-category10-default:#939db9;--gse-ui-charts-areaChart-shading-category10-reduced:#939db940;--gse-ui-charts-areaChart-shading-category2-default:#abccec;--gse-ui-charts-areaChart-shading-category2-reduced:#abccec40;--gse-ui-charts-areaChart-shading-category3-default:#d5baff;--gse-ui-charts-areaChart-shading-category3-reduced:#d5baff40;--gse-ui-charts-areaChart-shading-category4-default:#c49bbd;--gse-ui-charts-areaChart-shading-category4-reduced:#c49bbd40;--gse-ui-charts-areaChart-shading-category5-default:#ffadbb;--gse-ui-charts-areaChart-shading-category5-reduced:#ffadbb40;--gse-ui-charts-areaChart-shading-category6-default:#ffdad1;--gse-ui-charts-areaChart-shading-category6-reduced:#ffdad140;--gse-ui-charts-areaChart-shading-category7-default:#ffe3a7;--gse-ui-charts-areaChart-shading-category7-reduced:#ffe3a740;--gse-ui-charts-areaChart-shading-category8-default:#e3eecc;--gse-ui-charts-areaChart-shading-category8-reduced:#e3eecc40;--gse-ui-charts-areaChart-shading-category9-default:#aae3d5;--gse-ui-charts-areaChart-shading-category9-reduced:#aae3d540;--gse-ui-charts-barChart-bar-category1-default:#056385;--gse-ui-charts-barChart-bar-category1-reduced:#05638540;--gse-ui-charts-barChart-bar-category2-default:#5798d9;--gse-ui-charts-barChart-bar-category2-reduced:#5798d940;--gse-ui-charts-barChart-bar-category3-default:#ac75ff;--gse-ui-charts-barChart-bar-category3-reduced:#ac75ff40;--gse-ui-charts-bubbleChart-bubbleFill-category1-default:#05638580;--gse-ui-charts-bubbleChart-bubbleFill-category1-hover:#056385;--gse-ui-charts-bubbleChart-bubbleFill-category1-reduced:#05638540;--gse-ui-charts-bubbleChart-bubbleFill-category10-default:#263b7380;--gse-ui-charts-bubbleChart-bubbleFill-category10-hover:#263b73;--gse-ui-charts-bubbleChart-bubbleFill-category10-reduced:#263b7340;--gse-ui-charts-bubbleChart-bubbleFill-category2-default:#5798d980;--gse-ui-charts-bubbleChart-bubbleFill-category2-hover:#5798d9;--gse-ui-charts-bubbleChart-bubbleFill-category2-reduced:#5798d940;--gse-ui-charts-bubbleChart-bubbleFill-category3-default:#ac75ff80;--gse-ui-charts-bubbleChart-bubbleFill-category3-hover:#ac75ff;--gse-ui-charts-bubbleChart-bubbleFill-category3-reduced:#ac75ff40;--gse-ui-charts-bubbleChart-bubbleFill-category4-default:#89387b80;--gse-ui-charts-bubbleChart-bubbleFill-category4-hover:#89387b;--gse-ui-charts-bubbleChart-bubbleFill-category4-reduced:#89387b40;--gse-ui-charts-bubbleChart-bubbleFill-category5-default:#ff5c7780;--gse-ui-charts-bubbleChart-bubbleFill-category5-hover:#ff5c77;--gse-ui-charts-bubbleChart-bubbleFill-category5-reduced:#ff5c7740;--gse-ui-charts-bubbleChart-bubbleFill-category6-default:#ffb5a380;--gse-ui-charts-bubbleChart-bubbleFill-category6-hover:#ffb5a3;--gse-ui-charts-bubbleChart-bubbleFill-category6-reduced:#ffb5a340;--gse-ui-charts-bubbleChart-bubbleFill-category7-default:#ffc65080;--gse-ui-charts-bubbleChart-bubbleFill-category7-hover:#ffc650;--gse-ui-charts-bubbleChart-bubbleFill-category7-reduced:#ffc65040;--gse-ui-charts-bubbleChart-bubbleFill-category8-default:#c6dd9880;--gse-ui-charts-bubbleChart-bubbleFill-category8-hover:#c6dd98;--gse-ui-charts-bubbleChart-bubbleFill-category8-reduced:#c6dd9840;--gse-ui-charts-bubbleChart-bubbleFill-category9-default:#54c6ab80;--gse-ui-charts-bubbleChart-bubbleFill-category9-hover:#54c6ab;--gse-ui-charts-bubbleChart-bubbleFill-category9-reduced:#54c6ab40;--gse-ui-charts-bubbleChart-bubbleOutline-category1-default:#056385;--gse-ui-charts-bubbleChart-bubbleOutline-category1-reduced:#05638540;--gse-ui-charts-bubbleChart-bubbleOutline-category10-default:#263b73;--gse-ui-charts-bubbleChart-bubbleOutline-category10-reduced:#263b7340;--gse-ui-charts-bubbleChart-bubbleOutline-category2-default:#5798d9;--gse-ui-charts-bubbleChart-bubbleOutline-category2-reduced:#5798d940;--gse-ui-charts-bubbleChart-bubbleOutline-category3-default:#ac75ff;--gse-ui-charts-bubbleChart-bubbleOutline-category3-reduced:#ac75ff40;--gse-ui-charts-bubbleChart-bubbleOutline-category4-default:#89387b;--gse-ui-charts-bubbleChart-bubbleOutline-category4-reduced:#89387b40;--gse-ui-charts-bubbleChart-bubbleOutline-category5-default:#ff5c77;--gse-ui-charts-bubbleChart-bubbleOutline-category5-reduced:#ff5c7740;--gse-ui-charts-bubbleChart-bubbleOutline-category6-default:#ffb5a3;--gse-ui-charts-bubbleChart-bubbleOutline-category6-reduced:#ffb5a340;--gse-ui-charts-bubbleChart-bubbleOutline-category7-default:#ffc650;--gse-ui-charts-bubbleChart-bubbleOutline-category7-reduced:#ffc65040;--gse-ui-charts-bubbleChart-bubbleOutline-category8-default:#c6dd98;--gse-ui-charts-bubbleChart-bubbleOutline-category8-reduced:#c6dd9840;--gse-ui-charts-bubbleChart-bubbleOutline-category9-default:#54c6ab;--gse-ui-charts-bubbleChart-bubbleOutline-category9-reduced:#54c6ab40;--gse-ui-charts-columnChart-column-category1-default:#056385;--gse-ui-charts-columnChart-column-category1-reduced:#05638540;--gse-ui-charts-columnChart-column-category2-default:#5798d9;--gse-ui-charts-columnChart-column-category2-reduced:#5798d940;--gse-ui-charts-columnChart-column-category3-default:#ac75ff;--gse-ui-charts-columnChart-column-category3-reduced:#ac75ff40;--gse-ui-charts-donutChart-segment-category1-default:#056385;--gse-ui-charts-donutChart-segment-category1-reduced:#05638540;--gse-ui-charts-donutChart-segment-category10-default:#263b73;--gse-ui-charts-donutChart-segment-category10-reduced:#263b7340;--gse-ui-charts-donutChart-segment-category2-default:#5798d9;--gse-ui-charts-donutChart-segment-category2-reduced:#5798d940;--gse-ui-charts-donutChart-segment-category3-default:#ac75ff;--gse-ui-charts-donutChart-segment-category3-reduced:#ac75ff40;--gse-ui-charts-donutChart-segment-category4-default:#89387b;--gse-ui-charts-donutChart-segment-category4-reduced:#89387b40;--gse-ui-charts-donutChart-segment-category5-default:#ff5c77;--gse-ui-charts-donutChart-segment-category5-reduced:#ff5c7740;--gse-ui-charts-donutChart-segment-category6-default:#ffb5a3;--gse-ui-charts-donutChart-segment-category6-reduced:#ffb5a340;--gse-ui-charts-donutChart-segment-category7-default:#ffc650;--gse-ui-charts-donutChart-segment-category7-reduced:#ffc65040;--gse-ui-charts-donutChart-segment-category8-default:#c6dd98;--gse-ui-charts-donutChart-segment-category8-reduced:#c6dd9840;--gse-ui-charts-donutChart-segment-category9-default:#54c6ab;--gse-ui-charts-donutChart-segment-category9-reduced:#54c6ab40;--gse-ui-charts-donutChart-segment-stoke-default:#ffffff;--gse-ui-charts-donutChart-segment-chartMessage-default:#ebedf5;--gse-ui-charts-gaugeChart-segment-default:#056385;--gse-ui-charts-gaugeChart-segment-track:#ebedf5;--gse-ui-charts-gaugeChart-segment-chartMessage:#ebedf5;--gse-ui-charts-gaugeChart-indicator-positive:#056d4d;--gse-ui-charts-gaugeChart-indicator-negative:#b51b37;--gse-ui-charts-heatmap-numericalTile-level1-default:#cdeaf5;--gse-ui-charts-heatmap-numericalTile-level1-reduced:#cdeaf540;--gse-ui-charts-heatmap-numericalTile-level10-default:#052a38;--gse-ui-charts-heatmap-numericalTile-level10-reduced:#052a3840;--gse-ui-charts-heatmap-numericalTile-level2-default:#9fd6ea;--gse-ui-charts-heatmap-numericalTile-level2-reduced:#9fd6ea40;--gse-ui-charts-heatmap-numericalTile-level3-default:#81cbe5;--gse-ui-charts-heatmap-numericalTile-level3-reduced:#81cbe540;--gse-ui-charts-heatmap-numericalTile-level4-default:#53bee5;--gse-ui-charts-heatmap-numericalTile-level4-reduced:#53bee540;--gse-ui-charts-heatmap-numericalTile-level5-default:#28afe0;--gse-ui-charts-heatmap-numericalTile-level5-reduced:#28afe040;--gse-ui-charts-heatmap-numericalTile-level6-default:#1589b2;--gse-ui-charts-heatmap-numericalTile-level6-reduced:#1589b240;--gse-ui-charts-heatmap-numericalTile-level7-default:#056385;--gse-ui-charts-heatmap-numericalTile-level7-reduced:#05638540;--gse-ui-charts-heatmap-numericalTile-level8-default:#04445c;--gse-ui-charts-heatmap-numericalTile-level8-reduced:#04445c40;--gse-ui-charts-heatmap-numericalTile-level9-default:#002533;--gse-ui-charts-heatmap-numericalTile-level9-reduced:#00253340;--gse-ui-charts-heatmap-categoricalTile-green-default:#81cbe5;--gse-ui-charts-heatmap-categoricalTile-green-reduced:#81cbe540;--gse-ui-charts-heatmap-categoricalTile-red-default:#ff9dad;--gse-ui-charts-heatmap-categoricalTile-red-reduced:#ff9dad40;--gse-ui-charts-heatmap-categoricalTile-yellow-default:#ffdd96;--gse-ui-charts-heatmap-categoricalTile-yellow-reduced:#ffdd9640;--gse-ui-charts-heatmap-tileLabel-default:#2a2a2e;--gse-ui-charts-heatmap-tileLabel-inverse:#ffffff;--gse-ui-charts-heatmap-chartMessage-background-default:#ebedf5;--gse-ui-charts-heatmap-legend-categorical-green:#81cbe5;--gse-ui-charts-heatmap-legend-categorical-red:#ff9dad;--gse-ui-charts-heatmap-legend-categorical-yellow:#ffdd96;--gse-ui-charts-heatmap-legend-gradient-spacingBottom:4px;--gse-ui-charts-heatmap-legend-label-fontFamily:\"Noto Sans\";--gse-ui-charts-heatmap-legend-label-fontWeight:400;--gse-ui-charts-heatmap-legend-label-fontSize:12px;--gse-ui-charts-heatmap-legend-label-lineHeight:18px;--gse-ui-charts-heatmap-tile-label-fontFamily:\"Noto Sans\";--gse-ui-charts-heatmap-tile-label-fontWeight:400;--gse-ui-charts-heatmap-tile-label-fontSize:12px;--gse-ui-charts-heatmap-tile-label-lineHeight:18px;--gse-ui-charts-lineChart-line-category1-default:#056385;--gse-ui-charts-lineChart-line-category1-reduced:#05638540;--gse-ui-charts-lineChart-line-category10-default:#263b73;--gse-ui-charts-lineChart-line-category10-reduced:#263b7340;--gse-ui-charts-lineChart-line-category2-default:#5798d9;--gse-ui-charts-lineChart-line-category2-reduced:#5798d940;--gse-ui-charts-lineChart-line-category3-default:#ac75ff;--gse-ui-charts-lineChart-line-category3-reduced:#ac75ff40;--gse-ui-charts-lineChart-line-category4-default:#89387b;--gse-ui-charts-lineChart-line-category4-reduced:#89387b40;--gse-ui-charts-lineChart-line-category5-default:#ff5c77;--gse-ui-charts-lineChart-line-category5-reduced:#ff5c7740;--gse-ui-charts-lineChart-line-category6-default:#ffb5a3;--gse-ui-charts-lineChart-line-category6-reduced:#ffb5a340;--gse-ui-charts-lineChart-line-category7-default:#ffc650;--gse-ui-charts-lineChart-line-category7-reduced:#ffc65040;--gse-ui-charts-lineChart-line-category8-default:#c6dd98;--gse-ui-charts-lineChart-line-category8-reduced:#c6dd9840;--gse-ui-charts-lineChart-line-category9-default:#54c6ab;--gse-ui-charts-lineChart-line-category9-reduced:#54c6ab40;--gse-ui-charts-lineChart-point-pointFill-default:#ffffff;--gse-ui-charts-lineChart-point-pointFill-category1:#056385;--gse-ui-charts-lineChart-point-pointFill-category10:#263b73;--gse-ui-charts-lineChart-point-pointFill-category2:#5798d9;--gse-ui-charts-lineChart-point-pointFill-category3:#ac75ff;--gse-ui-charts-lineChart-point-pointFill-category4:#89387b;--gse-ui-charts-lineChart-point-pointFill-category5:#ff5c77;--gse-ui-charts-lineChart-point-pointFill-category6:#ffb5a3;--gse-ui-charts-lineChart-point-pointFill-category7:#ffc650;--gse-ui-charts-lineChart-point-pointFill-category8:#c6dd98;--gse-ui-charts-lineChart-point-pointFill-category9:#54c6ab;--gse-ui-charts-lineChart-point-pointOutline-category1:#056385;--gse-ui-charts-lineChart-point-pointOutline-category10:#263b73;--gse-ui-charts-lineChart-point-pointOutline-category2:#5798d9;--gse-ui-charts-lineChart-point-pointOutline-category3:#ac75ff;--gse-ui-charts-lineChart-point-pointOutline-category4:#89387b;--gse-ui-charts-lineChart-point-pointOutline-category5:#ff5c77;--gse-ui-charts-lineChart-point-pointOutline-category6:#ffb5a3;--gse-ui-charts-lineChart-point-pointOutline-category7:#ffc650;--gse-ui-charts-lineChart-point-pointOutline-category8:#c6dd98;--gse-ui-charts-lineChart-point-pointOutline-category9:#54c6ab;--gse-ui-charts-pieChart-segment-category1-default:#056385;--gse-ui-charts-pieChart-segment-category1-reduced:#05638540;--gse-ui-charts-pieChart-segment-category10-default:#263b73;--gse-ui-charts-pieChart-segment-category10-reduced:#263b7340;--gse-ui-charts-pieChart-segment-category2-default:#5798d9;--gse-ui-charts-pieChart-segment-category2-reduced:#5798d940;--gse-ui-charts-pieChart-segment-category3-default:#ac75ff;--gse-ui-charts-pieChart-segment-category3-reduced:#ac75ff40;--gse-ui-charts-pieChart-segment-category4-default:#89387b;--gse-ui-charts-pieChart-segment-category4-reduced:#89387b40;--gse-ui-charts-pieChart-segment-category5-default:#ff5c77;--gse-ui-charts-pieChart-segment-category5-reduced:#ff5c7740;--gse-ui-charts-pieChart-segment-category6-default:#ffb5a3;--gse-ui-charts-pieChart-segment-category6-reduced:#ffb5a340;--gse-ui-charts-pieChart-segment-category7-default:#ffc650;--gse-ui-charts-pieChart-segment-category7-reduced:#ffc65040;--gse-ui-charts-pieChart-segment-category8-default:#c6dd98;--gse-ui-charts-pieChart-segment-category8-reduced:#c6dd9840;--gse-ui-charts-pieChart-segment-category9-default:#54c6ab;--gse-ui-charts-pieChart-segment-category9-reduced:#54c6ab40;--gse-ui-charts-pieChart-segment-chartMessage-default:#ebedf5;--gse-ui-charts-pieChart-segment-stroke-default:#ffffff;--gse-ui-charts-sankeyAlluvial-link-category1-default:#05638580;--gse-ui-charts-sankeyAlluvial-link-category1-reduced:#0563851a;--gse-ui-charts-sankeyAlluvial-link-category10-default:#263b7380;--gse-ui-charts-sankeyAlluvial-link-category10-reduced:#263b731a;--gse-ui-charts-sankeyAlluvial-link-category2-default:#5798d980;--gse-ui-charts-sankeyAlluvial-link-category2-reduced:#5798d91a;--gse-ui-charts-sankeyAlluvial-link-category3-default:#ac75ff80;--gse-ui-charts-sankeyAlluvial-link-category3-reduced:#ac75ff1a;--gse-ui-charts-sankeyAlluvial-link-category4-default:#89387b80;--gse-ui-charts-sankeyAlluvial-link-category4-reduced:#89387b1a;--gse-ui-charts-sankeyAlluvial-link-category5-default:#ff5c7780;--gse-ui-charts-sankeyAlluvial-link-category5-reduced:#ff5c771a;--gse-ui-charts-sankeyAlluvial-link-category6-default:#ffb5a380;--gse-ui-charts-sankeyAlluvial-link-category6-reduced:#ffb5a31a;--gse-ui-charts-sankeyAlluvial-link-category7-default:#ffc65080;--gse-ui-charts-sankeyAlluvial-link-category7-reduced:#ffc6501a;--gse-ui-charts-sankeyAlluvial-link-category8-default:#c6dd9880;--gse-ui-charts-sankeyAlluvial-link-category8-reduced:#c6dd981a;--gse-ui-charts-sankeyAlluvial-link-category9-default:#54c6ab80;--gse-ui-charts-sankeyAlluvial-link-category9-reduced:#54c6ab1a;--gse-ui-charts-sankeyAlluvial-link-subtle-default:#cad1e180;--gse-ui-charts-sankeyAlluvial-link-subtle-reduced:#cad1e11a;--gse-ui-charts-sankeyAlluvial-leftNode-spacingLeft:8px;--gse-ui-charts-sankeyAlluvial-node-category1-default:#056385;--gse-ui-charts-sankeyAlluvial-node-category1-reduced:#05638540;--gse-ui-charts-sankeyAlluvial-node-category10-default:#263b73;--gse-ui-charts-sankeyAlluvial-node-category10-reduced:#263b7340;--gse-ui-charts-sankeyAlluvial-node-category2-default:#5798d9;--gse-ui-charts-sankeyAlluvial-node-category2-reduced:#5798d940;--gse-ui-charts-sankeyAlluvial-node-category3-default:#ac75ff;--gse-ui-charts-sankeyAlluvial-node-category3-reduced:#ac75ff40;--gse-ui-charts-sankeyAlluvial-node-category4-default:#89387b;--gse-ui-charts-sankeyAlluvial-node-category4-reduced:#89387b40;--gse-ui-charts-sankeyAlluvial-node-category5-default:#ff5c77;--gse-ui-charts-sankeyAlluvial-node-category5-reduced:#ff5c7740;--gse-ui-charts-sankeyAlluvial-node-category6-default:#ffb5a3;--gse-ui-charts-sankeyAlluvial-node-category6-reduced:#ffb5a340;--gse-ui-charts-sankeyAlluvial-node-category7-default:#ffc650;--gse-ui-charts-sankeyAlluvial-node-category7-reduced:#ffc65040;--gse-ui-charts-sankeyAlluvial-node-category8-default:#c6dd98;--gse-ui-charts-sankeyAlluvial-node-category8-reduced:#c6dd9840;--gse-ui-charts-sankeyAlluvial-node-category9-default:#54c6ab;--gse-ui-charts-sankeyAlluvial-node-category9-reduced:#54c6ab40;--gse-ui-charts-sankeyAlluvial-node-spaceBetween:4px;--gse-ui-charts-sankeyAlluvial-node-label-fontFamily:\"Noto Sans\";--gse-ui-charts-sankeyAlluvial-node-label-fontWeight:400;--gse-ui-charts-sankeyAlluvial-node-label-fontSize:12px;--gse-ui-charts-sankeyAlluvial-node-label-lineHeight:18px;--gse-ui-charts-sankeyAlluvial-nodeLabel:#2a2a2e;--gse-ui-charts-sankeyAlluvial-rightNode-spacingRight:8px;--gse-ui-charts-scatterChart-dotFill-default:#ffffff;--gse-ui-charts-scatterChart-dotFill-category1-hover:#056385;--gse-ui-charts-scatterChart-dotFill-category10-hover:#263b73;--gse-ui-charts-scatterChart-dotFill-category2-hover:#5798d9;--gse-ui-charts-scatterChart-dotFill-category3-hover:#ac75ff;--gse-ui-charts-scatterChart-dotFill-category4-hover:#89387b;--gse-ui-charts-scatterChart-dotFill-category5-hover:#ff5c77;--gse-ui-charts-scatterChart-dotFill-category6-hover:#ffb5a3;--gse-ui-charts-scatterChart-dotFill-category7-hover:#ffc650;--gse-ui-charts-scatterChart-dotFill-category8-hover:#c6dd98;--gse-ui-charts-scatterChart-dotFill-category9-hover:#54c6ab;--gse-ui-charts-scatterChart-dotOutline-category1-default:#056385;--gse-ui-charts-scatterChart-dotOutline-category1-reduced:#05638540;--gse-ui-charts-scatterChart-dotOutline-category10-default:#263b73;--gse-ui-charts-scatterChart-dotOutline-category10-reduced:#263b7340;--gse-ui-charts-scatterChart-dotOutline-category2-default:#5798d9;--gse-ui-charts-scatterChart-dotOutline-category2-reduced:#5798d940;--gse-ui-charts-scatterChart-dotOutline-category3-default:#ac75ff;--gse-ui-charts-scatterChart-dotOutline-category3-reduced:#ac75ff40;--gse-ui-charts-scatterChart-dotOutline-category4-default:#89387b;--gse-ui-charts-scatterChart-dotOutline-category4-reduced:#89387b40;--gse-ui-charts-scatterChart-dotOutline-category5-default:#ff5c77;--gse-ui-charts-scatterChart-dotOutline-category5-reduced:#ff5c7740;--gse-ui-charts-scatterChart-dotOutline-category6-default:#ffb5a3;--gse-ui-charts-scatterChart-dotOutline-category6-reduced:#ffb5a340;--gse-ui-charts-scatterChart-dotOutline-category7-default:#ffc650;--gse-ui-charts-scatterChart-dotOutline-category7-reduced:#ffc65040;--gse-ui-charts-scatterChart-dotOutline-category8-default:#c6dd98;--gse-ui-charts-scatterChart-dotOutline-category8-reduced:#c6dd9840;--gse-ui-charts-scatterChart-dotOutline-category9-default:#54c6ab;--gse-ui-charts-scatterChart-dotOutline-category9-reduced:#54c6ab40;--gse-ui-charts-sparkline-mono-default:#2143a2;--gse-ui-charts-sparkline-mono-reduced:#2143a266;--gse-ui-charts-sparkline-positive-reduced:#056d4d66;--gse-ui-charts-sparkline-positive-default:#056d4d;--gse-ui-charts-sparkline-negative-reduced:#b51b3766;--gse-ui-charts-sparkline-negative-default:#b51b37;--gse-ui-charts-sparkline-neutral-reduced:#9faac666;--gse-ui-charts-sparkline-neutral-default:#9faac6;--gse-ui-charts-sparkline-trendline-default:#cad1e1;--gse-ui-charts-chartsShared-centerTitle-subtitle-default:#2a2a2e;--gse-ui-charts-chartsShared-centerTitle-title-default:#2a2a2e;--gse-ui-charts-chartsShared-chartHeader-subtitle-default:#2a2a2e;--gse-ui-charts-chartsShared-chartHeader-title-default:#2a2a2e;--gse-ui-charts-chartsShared-chartHeader-spacingBottom:24px;--gse-ui-charts-chartsShared-chartMessages-message-default:#2a2a2e;--gse-ui-charts-chartsShared-chartMessages-empty-icon-default:#9a7b25;--gse-ui-charts-chartsShared-chartMessages-error-icon-default:#b51b37;--gse-ui-charts-chartsShared-chartMessages-loading-icon-default:#2143a2;--gse-ui-charts-chartsShared-chartMessages-loading-icon-track:#d5def7;--gse-ui-charts-chartsShared-chartMessages-icon-spacingBottom:4px;--gse-ui-charts-chartsShared-legend-dot-category1:#056385;--gse-ui-charts-chartsShared-legend-dot-category10:#263b73;--gse-ui-charts-chartsShared-legend-dot-category2:#5798d9;--gse-ui-charts-chartsShared-legend-dot-category3:#ac75ff;--gse-ui-charts-chartsShared-legend-dot-category4:#89387b;--gse-ui-charts-chartsShared-legend-dot-category5:#ff5c77;--gse-ui-charts-chartsShared-legend-dot-category6:#ffb5a3;--gse-ui-charts-chartsShared-legend-dot-category7:#ffc650;--gse-ui-charts-chartsShared-legend-dot-category8:#c6dd98;--gse-ui-charts-chartsShared-legend-dot-category9:#54c6ab;--gse-ui-charts-chartsShared-legend-dot-placeholder:#4f5157;--gse-ui-charts-chartsShared-legend-dot-spacingRight:4px;--gse-ui-charts-chartsShared-legend-label-default:#4f5157;--gse-ui-charts-chartsShared-legend-horizontal-seriesItem-spacingRight:16px;--gse-ui-charts-chartsShared-legend-vertical-seriesItem-spacingBottom:16px;--gse-ui-charts-chartsShared-legend-spacingLeft:24px;--gse-ui-charts-chartsShared-legend-spacingTop:24px;--gse-ui-charts-chartsShared-axis-x-spacingBottom:4px;--gse-ui-charts-chartsShared-axis-y-spacingLeft:8px;--gse-ui-charts-chartsShared-axis-default:#b2b7c4;--gse-ui-charts-chartsShared-gridLine-horizontal-last-spacingTop:24px;--gse-ui-charts-chartsShared-gridLine-vertical-first-spacingLeft:24px;--gse-ui-charts-chartsShared-gridLine-vertical-last-spacingRight:24px;--gse-ui-charts-chartsShared-gridLine-default:#ebedf5;--gse-ui-charts-chartsShared-gridLine-hover:#c1c6d4;--gse-ui-charts-chartsShared-label-x-spacingBottom:4px;--gse-ui-charts-chartsShared-label-y-spacingLeft:8px;--gse-ui-charts-chartsShared-label-default:#2a2a2e;--gse-ui-charts-chartsShared-axisTitle-default:#2a2a2e;--gse-ui-charts-chartsShared-focus-default:#5476d5;--gse-ui-charts-chartsShared-targetLine-default:#ff8f76;--gse-ui-charts-chartsShared-anatomy-axisTitle-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-anatomy-axisTitle-fontWeight:700;--gse-ui-charts-chartsShared-anatomy-axisTitle-fontSize:12px;--gse-ui-charts-chartsShared-anatomy-axisTitle-lineHeight:18px;--gse-ui-charts-chartsShared-anatomy-label-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-anatomy-label-fontWeight:400;--gse-ui-charts-chartsShared-anatomy-label-fontSize:12px;--gse-ui-charts-chartsShared-anatomy-label-lineHeight:18px;--gse-ui-charts-chartsShared-header-chartTitle-fontFamily:Urbanist;--gse-ui-charts-chartsShared-header-chartTitle-fontWeight:700;--gse-ui-charts-chartsShared-header-chartTitle-fontSize:18px;--gse-ui-charts-chartsShared-header-chartTitle-lineHeight:27px;--gse-ui-charts-chartsShared-header-chartSubtitle-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-header-chartSubtitle-fontWeight:400;--gse-ui-charts-chartsShared-header-chartSubtitle-fontSize:14px;--gse-ui-charts-chartsShared-header-chartSubtitle-lineHeight:20px;--gse-ui-charts-chartsShared-legend-label-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-legend-label-fontWeight:400;--gse-ui-charts-chartsShared-legend-label-fontSize:12px;--gse-ui-charts-chartsShared-legend-label-lineHeight:18px;--gse-ui-charts-chartsShared-messages-message-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-messages-message-fontWeight:400;--gse-ui-charts-chartsShared-messages-message-fontSize:12px;--gse-ui-charts-chartsShared-messages-message-lineHeight:18px;--gse-ui-charts-chartsShared-centerTitle-title-md-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-md-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-md-fontSize:36px;--gse-ui-charts-chartsShared-centerTitle-title-md-lineHeight:44px;--gse-ui-charts-chartsShared-centerTitle-title-xs-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-xs-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-xs-fontSize:18px;--gse-ui-charts-chartsShared-centerTitle-title-xs-lineHeight:27px;--gse-ui-charts-chartsShared-centerTitle-title-sm-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-sm-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-sm-fontSize:24px;--gse-ui-charts-chartsShared-centerTitle-title-sm-lineHeight:32px;--gse-ui-charts-chartsShared-centerTitle-title-lg-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-lg-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-lg-fontSize:48px;--gse-ui-charts-chartsShared-centerTitle-title-lg-lineHeight:58px;--gse-ui-charts-chartsShared-centerTitle-title-xl-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-xl-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-xl-fontSize:60px;--gse-ui-charts-chartsShared-centerTitle-title-xl-lineHeight:72px;--gse-ui-charts-chartsShared-centerTitle-title-2xl-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-2xl-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-2xl-fontSize:72px;--gse-ui-charts-chartsShared-centerTitle-title-2xl-lineHeight:86px;--gse-ui-charts-chartsShared-centerTitle-subtitle-md-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-md-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-md-fontSize:14px;--gse-ui-charts-chartsShared-centerTitle-subtitle-md-lineHeight:20px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-fontSize:10px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-lineHeight:14px;--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-fontSize:12px;--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-lineHeight:18px;--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-fontSize:16px;--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-lineHeight:24px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-fontSize:18px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-lineHeight:24px;--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-fontSize:24px;--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-lineHeight:32px}[flare-mode=dark]{--gse-ui-color-focus:#5476d5;--gse-ui-formControl-input-contentText-fontFamily:\"Noto Sans\";--gse-ui-formControl-input-contentText-fontWeight:400;--gse-ui-formControl-input-contentText-fontSize:12px;--gse-ui-formControl-input-contentText-lineHeight:18px;--gse-ui-formControl-input-default-border-color:#848891;--gse-ui-formControl-input-default-border-width:1px;--gse-ui-formControl-input-default-border-style:solid;--gse-ui-formControl-input-hover-border-color:#829ce5;--gse-ui-formControl-input-hover-border-width:1px;--gse-ui-formControl-input-hover-border-style:solid;--gse-ui-formControl-input-active-border-color:#adbff0;--gse-ui-formControl-input-active-border-width:1px;--gse-ui-formControl-input-active-border-style:solid;--gse-ui-formControl-input-error-border-color:#e22245;--gse-ui-formControl-input-error-border-width:1px;--gse-ui-formControl-input-error-border-style:solid;--gse-ui-formControl-input-disabled-border-color:#848891;--gse-ui-formControl-input-disabled-border-width:1px;--gse-ui-formControl-input-disabled-border-style:solid;--gse-ui-formControl-input-disabled-opacity:0.5;--gse-ui-formControl-input-borderRadius:4px;--gse-ui-formControl-input-backgroundColor:#1e1e21;--gse-ui-formControl-input-placeholderColor:#c1c6d4;--gse-ui-formControl-input-suggestionColor:#c1c6d4;--gse-ui-formControl-input-populatedColor:#ffffff;--gse-ui-formControl-input-inputClearable-inputClearableColor:#c1c6d4;--gse-ui-formControl-input-inputClearable-size:16px;--gse-ui-formControl-input-gap:12px;--gse-ui-formControl-input-top:8px;--gse-ui-formControl-input-padding:8px 12px;--gse-ui-formControl-input-prefixSufix-text-fontFamily:\"Noto Sans\";--gse-ui-formControl-input-prefixSufix-text-fontWeight:700;--gse-ui-formControl-input-prefixSufix-text-fontSize:14px;--gse-ui-formControl-input-prefixSufix-text-lineHeight:20px;--gse-ui-formControl-input-prefixSufix-height:32px;--gse-ui-formControl-input-prefixSufix-defaultColor:#c1c6d4;--gse-ui-formControl-input-textfield-height:32px;--gse-ui-formControl-input-textfield-minWidth:48px;--gse-ui-formControl-input-colorPicker-size:32px;--gse-ui-formControl-input-inputIcon-size:16px;--gse-ui-formControl-input-inputIcon-defaultColor:#ffffff;--gse-ui-formControl-input-inputIcon-iconEndColor:#c1c6d4;--gse-ui-formControl-input-focusRing-defaultColor:#5476d5;--gse-ui-formControl-input-textarea-height:98px;--gse-ui-formControl-input-focus-border-color:#5476d5;--gse-ui-formControl-input-focus-border-width:2px;--gse-ui-formControl-input-focus-border-style:solid;--gse-ui-formControl-input-spinbuttonIcon-size:16px;--gse-ui-formControl-input-focusSelection-backgroundColor:#5476d5;--gse-ui-formControl-label-padding:0 0 8px 0;--gse-ui-formControl-label-text-fontFamily:\"Noto Sans\";--gse-ui-formControl-label-text-fontWeight:400;--gse-ui-formControl-label-text-fontSize:12px;--gse-ui-formControl-label-text-lineHeight:18px;--gse-ui-formControl-label-textBold-fontFamily:\"Noto Sans\";--gse-ui-formControl-label-textBold-fontWeight:600;--gse-ui-formControl-label-textBold-fontSize:12px;--gse-ui-formControl-label-textBold-lineHeight:18px;--gse-ui-formControl-label-labelColor:#ffffff;--gse-ui-formControl-label-indicator-text-fontFamily:\"Noto Sans\";--gse-ui-formControl-label-indicator-text-fontWeight:400;--gse-ui-formControl-label-indicator-text-fontSize:12px;--gse-ui-formControl-label-indicator-text-lineHeight:18px;--gse-ui-formControl-label-indicator-requiredColor:#e84e6a;--gse-ui-formControl-label-indicator-optionalColor:#b2b7c4;--gse-ui-formControl-label-iconSize:16px;--gse-ui-formControl-label-tooltipTrigger-color:#b2b7c4;--gse-ui-formControl-label-tooltipTrigger-borderRadius:2px;--gse-ui-formControl-formField-gap:4px;--gse-ui-formControl-group-gapItems:8px;--gse-ui-formControl-helper-gap:4px;--gse-ui-formControl-helper-helperText-fontFamily:\"Noto Sans\";--gse-ui-formControl-helper-helperText-fontWeight:400;--gse-ui-formControl-helper-helperText-fontSize:12px;--gse-ui-formControl-helper-helperText-lineHeight:18px;--gse-ui-formControl-helper-padding:8px 0 0 0;--gse-ui-formControl-helper-icon-padding:1rem;--gse-ui-formControl-helper-paddingSmall:4px 0 0 0;--gse-ui-formControl-helper-errorPadding:4px 0 0 0;--gse-ui-formControl-helper-defaultColor:#c1c6d4;--gse-ui-formControl-helper-errorColor:#e84e6a;--gse-ui-formControl-helper-iconSize:16px;--gse-ui-formControl-spinButton-gap:8px;--gse-ui-formControl-spinner-track:#5476d5;--gse-ui-formControl-spinner-errorColor:#465066;--gse-ui-formControl-textarea-padding:8px;--gse-ui-formControl-focusRing-borderRadius:4px;--gse-ui-calendarMenu-month-defaultText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-month-defaultText-fontWeight:400;--gse-ui-calendarMenu-month-defaultText-fontSize:12px;--gse-ui-calendarMenu-month-defaultText-lineHeight:18px;--gse-ui-calendarMenu-month-currentText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-month-currentText-fontWeight:700;--gse-ui-calendarMenu-month-currentText-fontSize:12px;--gse-ui-calendarMenu-month-currentText-lineHeight:18px;--gse-ui-calendarMenu-month-default-foregroundColor:#ffffff;--gse-ui-calendarMenu-month-single-header-textWidth:154px;--gse-ui-calendarMenu-month-single-header-width:218px;--gse-ui-calendarMenu-month-single-header-height:48px;--gse-ui-calendarMenu-month-monthCell-width:66px;--gse-ui-calendarMenu-month-monthCell-height:48px;--gse-ui-calendarMenu-month-headerText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-month-headerText-fontWeight:700;--gse-ui-calendarMenu-month-headerText-fontSize:16px;--gse-ui-calendarMenu-month-headerText-lineHeight:24px;--gse-ui-calendarMenu-month-range-vertical-width:272px;--gse-ui-calendarMenu-month-range-vertical-height:652px;--gse-ui-calendarMenu-month-range-timePickerOn-height:72px;--gse-ui-calendarMenu-month-focusBorderRadius:20px;--gse-ui-calendarMenu-month-borderRadius:16px;--gse-ui-calendarMenu-month-calendarButton-focusBorderRadius:4px;--gse-ui-calendarMenu-month-selected-foregroundColor:#ffffff;--gse-ui-calendarMenu-month-selected-backgroundColor:#2143a2;--gse-ui-calendarMenu-month-selected-hoverBackgroundColor:#19327a;--gse-ui-calendarMenu-month-hover-backgroundColor:#465066;--gse-ui-calendarMenu-day-range-width:16px;--gse-ui-calendarMenu-day-range-height:32px;--gse-ui-calendarMenu-day-input-height:32px;--gse-ui-calendarMenu-day-input-width:160px;--gse-ui-calendarMenu-day-headerText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-day-headerText-fontWeight:700;--gse-ui-calendarMenu-day-headerText-fontSize:12px;--gse-ui-calendarMenu-day-headerText-lineHeight:18px;--gse-ui-calendarMenu-day-date-size:32px;--gse-ui-calendarMenu-day-timePickerOn-width:272px;--gse-ui-calendarMenu-day-timePickerOn-padding:0px 24px 18px;--gse-ui-calendarMenu-height:234px;--gse-ui-calendarMenu-width:250px;--gse-ui-calendarMenu-dateBody-padding:16px 24px;--gse-ui-calendarMenu-dateBody-gap:8px;--gse-ui-calendarMenu-header-backgroundColor:#2143a2;--gse-ui-calendarMenu-header-foregroundColor:#ffffff;--gse-ui-calendarMenu-header-gap:8px;--gse-ui-calendarMenu-header-padding:12px 16px;--gse-ui-calendarMenu-header-arrow-padding:8px;--gse-ui-calendarMenu-backgroundColor:#2a2a2e;--gse-ui-calendarMenu-date-defaultText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-date-defaultText-fontWeight:400;--gse-ui-calendarMenu-date-defaultText-fontSize:12px;--gse-ui-calendarMenu-date-defaultText-lineHeight:18px;--gse-ui-calendarMenu-date-currentText-fontFamily:\"Noto Sans\";--gse-ui-calendarMenu-date-currentText-fontWeight:700;--gse-ui-calendarMenu-date-currentText-fontSize:12px;--gse-ui-calendarMenu-date-currentText-lineHeight:18px;--gse-ui-calendarMenu-date-selected-foregroundColor:#ffffff;--gse-ui-calendarMenu-date-selected-backgroundColor:#2143a2;--gse-ui-calendarMenu-date-selected-hoverBackgroundColor:#19327a;--gse-ui-calendarMenu-date-hover-backgroundColor:#465066;--gse-ui-calendarMenu-date-range-backgroundColor:#475675;--gse-ui-calendarMenu-date-default-foregroundColor:#ffffff;--gse-ui-calendarMenu-single-header-borderRadius:8px 8px 0 0;--gse-ui-calendarMenu-single-body-borderRadius:0 0 8px 8px;--gse-ui-calendarMenu-range-header-firstMonth-borderRadius:8px 0 0 0;--gse-ui-calendarMenu-range-header-secondMonth-borderRadius:0 8px 0 0;--gse-ui-calendarMenu-range-body-firstMonth-borderRadius:0 0 0 8px;--gse-ui-calendarMenu-range-body-secondMonth-borderRadius:0 0 8px 0;--gse-ui-calendarMenu-range-date-endDate-borderRadius:0 16px 16px 0;--gse-ui-calendarMenu-range-date-startDate-borderRadius:16px 0 0 16px;--gse-ui-calendarMenu-range-timePickerOn-padding:0px 24px 18px;--gse-ui-calendarMenu-range-timePickerOn-gap:32px;--gse-ui-calendarMenu-disabled-opacity:0.5;--gse-ui-calendarMenu-monthBody-padding:16px 24px;--gse-ui-calendarMenu-monthBody-gap:2px;--gse-ui-calendarMenu-boxShadow:0 0 4px 1px #000000b3;--gse-ui-calendarMenu-ctaGroup-height:68px;--gse-ui-calendarMenu-ctaGroup-padding:18px 24px;--gse-ui-globalNav-menuOption-selected-backgroundColor:#102251;--gse-ui-globalNav-menuOption-selected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-disabled-backgroundColor:#2a2a2e;--gse-ui-globalNav-menuOption-disabled-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-selectedPanel-backgroundColor:#19327a;--gse-ui-globalNav-menuOption-selectedPanel-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-return-selected-backgroundColor:#102251;--gse-ui-globalNav-menuOption-return-selected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-return-default-backgroundColor:#19327a;--gse-ui-globalNav-menuOption-return-default-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-return-hover-backgroundColor:#102251;--gse-ui-globalNav-menuOption-return-hover-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-height:32px;--gse-ui-globalNav-menuOption-width:248px;--gse-ui-globalNav-menuOption-padding:0px 12px;--gse-ui-globalNav-menuOption-gap:8px;--gse-ui-globalNav-menuOption-default-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-hover-backgroundColor:#0c193d;--gse-ui-globalNav-menuOption-hover-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-panelSelected-backgroundColor:#102251;--gse-ui-globalNav-menuOption-panelSelected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-focus-borderRadius:8px;--gse-ui-globalNav-menuOption-borderRadius:4px;--gse-ui-globalNav-menuOption-disableOpacity:0.5;--gse-ui-globalNav-menuOption-activeSelected-backgroundColor:#19327a;--gse-ui-globalNav-menuOption-activeSelected-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-treeView-bar:#263b73;--gse-ui-globalNav-menuOption-newTab-default-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-newTab-hover-backgroundColor:#0c193d;--gse-ui-globalNav-menuOption-newTab-hover-foregroundColor:#ffffff;--gse-ui-globalNav-menuOption-newTab-selected-backgroundColor:#102251;--gse-ui-globalNav-menuOption-newTab-selected-foregroundColor:#ffffff;--gse-ui-globalNav-sideMenu:linear-gradient(\n    135deg,\n    #09b581 0%,\n    #9de1cd 100%\n  );--gse-ui-globalNav-text-fontFamily:\"Noto Sans\";--gse-ui-globalNav-text-fontWeight:700;--gse-ui-globalNav-text-fontSize:12px;--gse-ui-globalNav-text-lineHeight:18px;--gse-ui-globalNav-toggle-onQueue-text-fontFamily:Roboto;--gse-ui-globalNav-toggle-onQueue-text-lineHeight:16px;--gse-ui-globalNav-toggle-onQueue-text-fontSize:12px;--gse-ui-globalNav-toggle-onQueue-text-fontWeight:600;--gse-ui-globalNav-toggle-gap:16px;--gse-ui-globalNav-toggle-offQueue-text-fontFamily:Roboto;--gse-ui-globalNav-toggle-offQueue-text-lineHeight:16px;--gse-ui-globalNav-toggle-offQueue-text-fontSize:12px;--gse-ui-globalNav-toggle-offQueue-text-fontWeight:400;--gse-ui-globalNav-focus-border-color:#5476d5;--gse-ui-globalNav-focus-border-width:2px;--gse-ui-globalNav-focus-border-style:solid;--gse-ui-globalNav-buttonReturn-height:48px;--gse-ui-globalNav-buttonReturn-width:280px;--gse-ui-globalNav-buttonReturn-padding:16px 28px;--gse-ui-globalNav-buttonReturn-gap:12px;--gse-ui-globalNav-treeView-border-color:#263b73;--gse-ui-globalNav-treeView-border-width:2px;--gse-ui-globalNav-treeView-border-style:solid;--gse-ui-globalNav-treeView-gap:8px;--gse-ui-globalNav-treeView-width:224px;--gse-ui-globalNav-bar-padding:8px 12px;--gse-ui-globalNav-topBar-items-gap:16px;--gse-ui-globalNav-topBar-padding:16px 24px;--gse-ui-globalNav-topBar-height:64px;--gse-ui-globalNav-topBar-frame-backgroundColor:#1e1e21;--gse-ui-globalNav-topBar-frame-stroke:#3e4044;--gse-ui-globalNav-topBar-logo:#ff451a;--gse-ui-globalNav-topBar-pageTitle:#ffffff;--gse-ui-globalNav-topBar-menuButton-closed-default-foregroundColor:#ffffff;--gse-ui-globalNav-topBar-menuButton-closed-hover-backgroundColor:#0c193d;--gse-ui-globalNav-topBar-menuButton-closed-hover-foregroundColorStroke:#ffffff;--gse-ui-globalNav-topBar-menuButton-closed-hover-foregroundColor:#d5def7;--gse-ui-globalNav-topBar-menuButton-open-default-foregroundColorStroke:#ffffff;--gse-ui-globalNav-topBar-menuButton-open-hover-backgroundColor:#0c193d;--gse-ui-globalNav-topBar-menuButton-open-hover-foregroundColor:#d5def7;--gse-ui-globalNav-panel-stroke:#3e4044;--gse-ui-globalNav-panel-panelTitle:#ffffff;--gse-ui-globalNav-panel-primary:linear-gradient(\n    127deg,\n    #141c34 3.19%,\n    #141929 225.06%\n  );--gse-ui-globalNav-panel-secondary:linear-gradient(\n    358deg,\n    #141929 0.16%,\n    #131315 98.45%\n  );--gse-ui-rating-star-gap:8px;--gse-ui-rating-default-color:#848891;--gse-ui-rating-active-color:#5476d5;--gse-ui-rating-hover-color:#829ce5;--gse-ui-rating-disabled-color:#848891;--gse-ui-rating-disabled-opacity:0.5;--gse-ui-rating-size:16px;--gse-ui-card-backgroundColor:#2a2a2e;--gse-ui-card-borderRadius:8px;--gse-ui-card-default-border-color:#4f5157;--gse-ui-card-default-border-width:1px;--gse-ui-card-default-border-style:solid;--gse-ui-card-raised-border-color:#4f5157;--gse-ui-card-raised-border-width:1px;--gse-ui-card-raised-border-style:solid;--gse-ui-card-raised-boxShadow:0 0 6px 1px #000000b3;--gse-ui-card-padding:24px;--gse-ui-card-borderless-border-color:rgba(0, 0, 0, 0);--gse-ui-card-borderless-border-width:1px;--gse-ui-card-borderless-border-style:solid;--gse-ui-tooltip-light-border-color:#4f5157;--gse-ui-tooltip-light-border-width:1px;--gse-ui-tooltip-light-border-style:solid;--gse-ui-tooltip-light-backgroundColor:#2a2a2e;--gse-ui-tooltip-light-foregroundColor:#ffffff;--gse-ui-tooltip-dark-border-color:#c1c6d4;--gse-ui-tooltip-dark-border-width:1px;--gse-ui-tooltip-dark-border-style:solid;--gse-ui-tooltip-dark-backgroundColor:#ffffff;--gse-ui-tooltip-dark-foregroundColor:#1e1e21;--gse-ui-tooltip-dark-iconColor:#1e1e21;--gse-ui-tooltip-boxShadow:0 0 6px 1px #000000b3;--gse-ui-tooltip-padding:8px 12px;--gse-ui-tooltip-height:32px;--gse-ui-tooltip-gap:8px;--gse-ui-tooltip-borderRadius:4px;--gse-ui-tooltip-text-fontFamily:\"Noto Sans\";--gse-ui-tooltip-text-fontWeight:400;--gse-ui-tooltip-text-fontSize:12px;--gse-ui-tooltip-text-lineHeight:18px;--gse-ui-tooltip-targetOffset:16px;--gse-ui-tooltip-maxWidth:350px;--gse-ui-tag-borderRadius:16px;--gse-ui-tag-default-bold-backgroundColor:#3d538f;--gse-ui-tag-default-bold-foregroundColor:#ffffff;--gse-ui-tag-default-subtle-backgroundColor:#152550;--gse-ui-tag-default-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent1-bold-backgroundColor:#6a6d75;--gse-ui-tag-accent1-bold-foregroundColor:#ffffff;--gse-ui-tag-accent1-subtle-backgroundColor:#3e4044;--gse-ui-tag-accent1-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent2-bold-backgroundColor:#327767;--gse-ui-tag-accent2-bold-foregroundColor:#ffffff;--gse-ui-tag-accent2-subtle-backgroundColor:#193b33;--gse-ui-tag-accent2-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent3-bold-backgroundColor:#056385;--gse-ui-tag-accent3-bold-foregroundColor:#ffffff;--gse-ui-tag-accent3-subtle-backgroundColor:#003447;--gse-ui-tag-accent3-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent4-bold-backgroundColor:#607732;--gse-ui-tag-accent4-bold-foregroundColor:#ffffff;--gse-ui-tag-accent4-subtle-backgroundColor:#303b19;--gse-ui-tag-accent4-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent5-bold-backgroundColor:#345b82;--gse-ui-tag-accent5-bold-foregroundColor:#ffffff;--gse-ui-tag-accent5-subtle-backgroundColor:#1a2e41;--gse-ui-tag-accent5-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent6-subtle-backgroundColor:#34234d;--gse-ui-tag-accent6-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent6-bold-backgroundColor:#674699;--gse-ui-tag-accent6-bold-foregroundColor:#ffffff;--gse-ui-tag-textLarge-fontFamily:\"Noto Sans\";--gse-ui-tag-textLarge-fontWeight:600;--gse-ui-tag-textLarge-fontSize:14px;--gse-ui-tag-textLarge-lineHeight:20px;--gse-ui-tag-textSmall-fontFamily:\"Noto Sans\";--gse-ui-tag-textSmall-fontWeight:600;--gse-ui-tag-textSmall-fontSize:12px;--gse-ui-tag-textSmall-lineHeight:18px;--gse-ui-tag-padding:0 12px;--gse-ui-tag-removable-padding:0 8px 0 12px;--gse-ui-tag-removable-gap:4px;--gse-ui-tag-accent7-bold-backgroundColor:#89387b;--gse-ui-tag-accent7-bold-foregroundColor:#ffffff;--gse-ui-tag-accent7-subtle-backgroundColor:#451c3e;--gse-ui-tag-accent7-subtle-foregroundColor:#ffffff;--gse-ui-tag-height:20px;--gse-ui-tag-accent8-bold-backgroundColor:#993747;--gse-ui-tag-accent8-bold-foregroundColor:#ffffff;--gse-ui-tag-accent8-subtle-backgroundColor:#4d1c24;--gse-ui-tag-accent8-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent9-bold-backgroundColor:#992910;--gse-ui-tag-accent9-bold-foregroundColor:#ffffff;--gse-ui-tag-accent9-subtle-backgroundColor:#661c0a;--gse-ui-tag-accent9-subtle-foregroundColor:#ffffff;--gse-ui-tag-accent10-bold-backgroundColor:#664f20;--gse-ui-tag-accent10-bold-foregroundColor:#ffffff;--gse-ui-tag-accent10-subtle-backgroundColor:#4d3b18;--gse-ui-tag-accent10-subtle-foregroundColor:#ffffff;--gse-ui-tag-button-size:16px;--gse-ui-tag-disabled-opacity:0.5;--gse-ui-tag-small-height:20px;--gse-ui-tag-large-height:32px;--gse-ui-badge-borderRadius:16px;--gse-ui-badge-text-fontFamily:\"Noto Sans\";--gse-ui-badge-text-fontWeight:600;--gse-ui-badge-text-fontSize:12px;--gse-ui-badge-text-lineHeight:18px;--gse-ui-badge-height:20px;--gse-ui-badge-padding:2px 12px;--gse-ui-badge-gap:4px;--gse-ui-badge-info-bold-backgroundColor:#3d538f;--gse-ui-badge-info-bold-foregroundColor:#ffffff;--gse-ui-badge-info-regular-backgroundColor:#141c34;--gse-ui-badge-info-regular-foregroundColor:#ffffff;--gse-ui-badge-success-bold-backgroundColor:#056d4d;--gse-ui-badge-success-bold-foregroundColor:#ffffff;--gse-ui-badge-success-regular-backgroundColor:#02241a;--gse-ui-badge-success-regular-foregroundColor:#ffffff;--gse-ui-badge-warning-bold-backgroundColor:#c9a132;--gse-ui-badge-warning-bold-foregroundColor:#2a2a2e;--gse-ui-badge-warning-regular-backgroundColor:#6c5619;--gse-ui-badge-warning-regular-foregroundColor:#ffffff;--gse-ui-badge-error-bold-backgroundColor:#881429;--gse-ui-badge-error-bold-foregroundColor:#ffffff;--gse-ui-badge-error-regular-backgroundColor:#440a15;--gse-ui-badge-error-regular-foregroundColor:#ffffff;--gse-ui-icon-small-size:16px;--gse-ui-icon-medium-size:24px;--gse-ui-icon-large-size:32px;--gse-ui-icon-color:#b2b7c4;--gse-ui-alert-padding:8px 16px;--gse-ui-alert-gap:8px;--gse-ui-alert-info-backgroundColor:#141c34;--gse-ui-alert-info-foregroundColor:#ffffff;--gse-ui-alert-info-iconColor:#596ea6;--gse-ui-alert-info-border-color:#263b73;--gse-ui-alert-info-border-width:1px;--gse-ui-alert-info-border-style:solid;--gse-ui-alert-success-backgroundColor:#02241a;--gse-ui-alert-success-foregroundColor:#ffffff;--gse-ui-alert-success-iconColor:#09b581;--gse-ui-alert-success-border-color:#044834;--gse-ui-alert-success-border-width:1px;--gse-ui-alert-success-border-style:solid;--gse-ui-alert-warning-backgroundColor:#3d300c;--gse-ui-alert-warning-foregroundColor:#ffffff;--gse-ui-alert-warning-iconColor:#f8c73e;--gse-ui-alert-warning-border-color:#6c5619;--gse-ui-alert-warning-border-width:1px;--gse-ui-alert-warning-border-style:solid;--gse-ui-alert-error-backgroundColor:#2d070e;--gse-ui-alert-error-foregroundColor:#ffffff;--gse-ui-alert-error-iconColor:#e84e6a;--gse-ui-alert-error-border-color:#5a0e1c;--gse-ui-alert-error-border-width:1px;--gse-ui-alert-error-border-style:solid;--gse-ui-alert-text-fontFamily:\"Noto Sans\";--gse-ui-alert-text-fontWeight:400;--gse-ui-alert-text-fontSize:12px;--gse-ui-alert-text-lineHeight:18px;--gse-ui-alert-emphasisText-fontFamily:\"Noto Sans\";--gse-ui-alert-emphasisText-fontWeight:700;--gse-ui-alert-emphasisText-fontSize:12px;--gse-ui-alert-emphasisText-lineHeight:18px;--gse-ui-alert-borderRadius:4px;--gse-ui-breadcrumbs-primary-height:20px;--gse-ui-breadcrumbs-primary-separator-padding:0 12px;--gse-ui-breadcrumbs-primary-separator-typography-fontFamily:\"Noto Sans\";--gse-ui-breadcrumbs-primary-separator-typography-fontWeight:700;--gse-ui-breadcrumbs-primary-separator-typography-fontSize:14px;--gse-ui-breadcrumbs-primary-separator-typography-lineHeight:20px;--gse-ui-breadcrumbs-secondary-height:16px;--gse-ui-breadcrumbs-secondary-separator-padding:0 8px;--gse-ui-breadcrumbs-secondary-separator-typography-fontFamily:\"Noto Sans\";--gse-ui-breadcrumbs-secondary-separator-typography-fontWeight:700;--gse-ui-breadcrumbs-secondary-separator-typography-fontSize:14px;--gse-ui-breadcrumbs-secondary-separator-typography-lineHeight:20px;--gse-ui-breadcrumbs-separator-color:#4f5157;--gse-ui-breadcrumbs-borderRadius:0;--gse-ui-segmentedControl-button-padding:0 12px;--gse-ui-segmentedControl-button-gap:8px;--gse-ui-segmentedControl-button-start-borderRadius:4px 0 0 4px;--gse-ui-segmentedControl-button-selected-borderRadius:4px;--gse-ui-segmentedControl-button-middle-borderRadius:0;--gse-ui-segmentedControl-button-end-borderRadius:0 4px 4px 0;--gse-ui-segmentedControl-button-disabled-opacity:0.5;--gse-ui-segmentedControl-button-disabled-backgroundColor:rgba(0, 0, 0, 0);--gse-ui-segmentedControl-button-disabled-foregroundColor:#d5def7;--gse-ui-segmentedControl-button-default-backgroundColor:#1e1e21;--gse-ui-segmentedControl-button-default-foregroundColor:#829ce5;--gse-ui-segmentedControl-button-hover-backgroundColor:#465066;--gse-ui-segmentedControl-button-hover-foregroundColor:#d5def7;--gse-ui-segmentedControl-button-active-backgroundColor:#354a72;--gse-ui-segmentedControl-button-active-foregroundColor:#d5def7;--gse-ui-segmentedControl-borderRadius:4px;--gse-ui-segmentedControl-height:32px;--gse-ui-segmentedControl-border-color:#829ce5;--gse-ui-segmentedControl-border-width:1px;--gse-ui-segmentedControl-border-style:solid;--gse-ui-segmentedControl-divider-color:#829ce5;--gse-ui-segmentedControl-divider-width:1px;--gse-ui-segmentedControl-divider-style:solid;--gse-ui-segmentedControl-iconOnly-padding:0 8px;--gse-ui-segmentedControl-focus-offset:0;--gse-ui-formFooter-page-desktop-bottomPadding:16px;--gse-ui-formFooter-page-desktop-topPadding:16px;--gse-ui-formFooter-page-desktop-horizontalPadding:32px;--gse-ui-formFooter-page-desktop-gap:16px;--gse-ui-formFooter-page-mobile-bottomPadding:16px;--gse-ui-formFooter-page-mobile-topPadding:16px;--gse-ui-formFooter-page-mobile-horizontalPadding:16px;--gse-ui-formFooter-page-mobile-gap:16px;--gse-ui-formFooter-separator-color:#4f5157;--gse-ui-formFooter-separator-width:1px;--gse-ui-formFooter-separator-style:solid;--gse-ui-formFooter-sideSheet-desktop-bottomPadding:16px;--gse-ui-formFooter-sideSheet-desktop-topPadding:16px;--gse-ui-formFooter-sideSheet-desktop-horizontalPadding:24px;--gse-ui-formFooter-sideSheet-desktop-gap:16px;--gse-ui-formFooter-backgroundColor:#2a2a2e;--gse-ui-formFooter-border-color:#5476d5;--gse-ui-formFooter-border-width:1px;--gse-ui-formFooter-border-style:solid;--gse-ui-statusGlyph-negative:#e84e6a;--gse-ui-statusGlyph-positive:#09b581;--gse-ui-statusGlyph-neutral:#f8c73e;--gse-ui-statusGlyph-information:#596ea6;--gse-ui-copyToClipboard-label-active-backgroundColor:#475675;--gse-ui-copyToClipboard-label-foregroundColor:#ffffff;--gse-ui-copyToClipboard-label-padding:2px 4px;--gse-ui-copyToClipboard-label-borderRadius:4px;--gse-ui-copyToClipboard-label-text-fontFamily:\"Noto Sans\";--gse-ui-copyToClipboard-label-text-fontWeight:600;--gse-ui-copyToClipboard-label-text-fontSize:14px;--gse-ui-copyToClipboard-label-text-lineHeight:20px;--gse-ui-copyToClipboard-label-text-textDecoration:underline;--gse-ui-copyToClipboard-gap:8px;--gse-ui-copyToClipboard-contentContainer-gap:4px;--gse-ui-copyToClipboard-iconContainer-padding:4px;--gse-ui-copyToClipboard-tooltipIcon-success-foregroundColor:#09b581;--gse-ui-copyToClipboard-tooltipIcon-error-foregroundColor:#e84e6a;--gse-ui-dismissButton-foregroundColor:#b2b7c4;--gse-ui-button-default-height:32px;--gse-ui-button-default-padding:0 12px;--gse-ui-button-default-paddingIconOnly:8px;--gse-ui-button-dismiss-small-height:24px;--gse-ui-button-dismiss-small-width:24px;--gse-ui-button-dismiss-medium-height:32px;--gse-ui-button-dismiss-medium-width:32px;--gse-ui-button-iconOnly-width:32px;--gse-ui-button-icon-size:16px;--gse-ui-button-compact-height:24px;--gse-ui-button-compact-padding:0 12px;--gse-ui-button-compact-paddingIconOnly:4px;--gse-ui-button-gap:8px;--gse-ui-button-primary-default-backgroundColor:#2143a2;--gse-ui-button-primary-default-foregroundColor:#ffffff;--gse-ui-button-primary-hover-backgroundColor:#19327a;--gse-ui-button-primary-hover-foregroundColor:#ffffff;--gse-ui-button-primary-active-backgroundColor:#102251;--gse-ui-button-primary-active-foregroundColor:#ffffff;--gse-ui-button-secondary-default-backgroundColor:#465066;--gse-ui-button-secondary-default-foregroundColor:#ffffff;--gse-ui-button-secondary-hover-backgroundColor:#475675;--gse-ui-button-secondary-hover-foregroundColor:#ffffff;--gse-ui-button-secondary-active-backgroundColor:#354a72;--gse-ui-button-secondary-active-foregroundColor:#ffffff;--gse-ui-button-tertiary-default-backgroundColor:rgba(0, 0, 0, 0);--gse-ui-button-tertiary-default-foregroundColor:#adbff0;--gse-ui-button-tertiary-default-border-color:#adbff0;--gse-ui-button-tertiary-default-border-width:1px;--gse-ui-button-tertiary-default-border-style:solid;--gse-ui-button-tertiary-hover-backgroundColor:#19327a;--gse-ui-button-tertiary-hover-foregroundColor:#d5def7;--gse-ui-button-tertiary-active-backgroundColor:#102251;--gse-ui-button-tertiary-active-foregroundColor:#ffffff;--gse-ui-button-ghost-default-backgroundColor:rgba(0, 0, 0, 0);--gse-ui-button-ghost-default-foregroundColor:#adbff0;--gse-ui-button-ghost-hover-backgroundColor:#475675;--gse-ui-button-ghost-hover-foregroundColor:#d5def7;--gse-ui-button-ghost-active-backgroundColor:#354a72;--gse-ui-button-ghost-active-foregroundColor:#ffffff;--gse-ui-button-danger-default-backgroundColor:#881429;--gse-ui-button-danger-default-foregroundColor:#ffffff;--gse-ui-button-danger-hover-backgroundColor:#e22245;--gse-ui-button-danger-hover-foregroundColor:#ffffff;--gse-ui-button-danger-active-backgroundColor:#440a15;--gse-ui-button-danger-active-foregroundColor:#ffffff;--gse-ui-button-borderRadius:4px;--gse-ui-button-disabled-opacity:0.5;--gse-ui-button-text-fontFamily:\"Noto Sans\";--gse-ui-button-text-fontWeight:700;--gse-ui-button-text-fontSize:12px;--gse-ui-button-text-lineHeight:18px;--gse-ui-actionButton-rightSegment-size:32px;--gse-ui-actionButton-rightSegment-padding:0 8px;--gse-ui-actionButton-rightSegment-borderRadius:0 4px 4px 0;--gse-ui-actionButton-rightSegment-focusBorderRadius:0 16px 16px 0;--gse-ui-actionButton-height:32px;--gse-ui-actionButton-focus-height:40px;--gse-ui-actionButton-leftSegment-gap:8px;--gse-ui-actionButton-leftSegment-padding:0 16px;--gse-ui-actionButton-leftSegment-focusBorderRadius:16px 0 0 16px;--gse-ui-actionButton-leftSegment-borderRadius:4px 0 0 4px;--gse-ui-actionButton-borderRadius:4px;--gse-ui-actionButton-tertiary-divider-color:#adbff0;--gse-ui-actionButton-tertiary-divider-width:2px;--gse-ui-actionButton-tertiary-divider-style:solid;--gse-ui-actionButton-primary-divider-color:#1e1e21;--gse-ui-actionButton-primary-divider-width:2px;--gse-ui-actionButton-primary-divider-style:solid;--gse-ui-actionButton-secondary-divider-color:#1e1e21;--gse-ui-actionButton-secondary-divider-width:2px;--gse-ui-actionButton-secondary-divider-style:solid;--gse-ui-actionButton-danger-divider-color:#1e1e21;--gse-ui-actionButton-danger-divider-width:2px;--gse-ui-actionButton-danger-divider-style:solid;--gse-ui-links-standalone-medium-text-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-medium-text-fontWeight:600;--gse-ui-links-standalone-medium-text-fontSize:14px;--gse-ui-links-standalone-medium-text-lineHeight:20px;--gse-ui-links-standalone-medium-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-medium-underlinedText-fontWeight:600;--gse-ui-links-standalone-medium-underlinedText-fontSize:14px;--gse-ui-links-standalone-medium-underlinedText-lineHeight:20px;--gse-ui-links-standalone-medium-underlinedText-textDecoration:underline;--gse-ui-links-standalone-small-text-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-small-text-fontWeight:600;--gse-ui-links-standalone-small-text-fontSize:12px;--gse-ui-links-standalone-small-text-lineHeight:18px;--gse-ui-links-standalone-small-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-standalone-small-underlinedText-fontWeight:600;--gse-ui-links-standalone-small-underlinedText-fontSize:12px;--gse-ui-links-standalone-small-underlinedText-lineHeight:18px;--gse-ui-links-standalone-small-underlinedText-textDecoration:underline;--gse-ui-links-standalone-padding:8px;--gse-ui-links-standalone-gap:8px;--gse-ui-links-inLine-medium-text-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-medium-text-fontWeight:600;--gse-ui-links-inLine-medium-text-fontSize:14px;--gse-ui-links-inLine-medium-text-lineHeight:20px;--gse-ui-links-inLine-medium-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-medium-underlinedText-fontWeight:600;--gse-ui-links-inLine-medium-underlinedText-fontSize:14px;--gse-ui-links-inLine-medium-underlinedText-lineHeight:20px;--gse-ui-links-inLine-medium-underlinedText-textDecoration:underline;--gse-ui-links-inLine-small-text-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-small-text-fontWeight:600;--gse-ui-links-inLine-small-text-fontSize:12px;--gse-ui-links-inLine-small-text-lineHeight:18px;--gse-ui-links-inLine-small-underlinedText-fontFamily:\"Noto Sans\";--gse-ui-links-inLine-small-underlinedText-fontWeight:600;--gse-ui-links-inLine-small-underlinedText-fontSize:12px;--gse-ui-links-inLine-small-underlinedText-lineHeight:18px;--gse-ui-links-inLine-small-underlinedText-textDecoration:underline;--gse-ui-links-inLine-padding:4px;--gse-ui-links-icon:16px;--gse-ui-links-default-foregroundColor:#829ce5;--gse-ui-links-disabled-foregroundColor:#829ce5;--gse-ui-links-hover-foregroundColor:#adbff0;--gse-ui-links-active-foregroundColor:#d5def7;--gse-ui-links-visited-foregroundColor:#808db2;--gse-ui-links-focusOutline-borderRadius:4px;--gse-ui-radioButton-icon-default-unselectedForegroundColor:#848891;--gse-ui-radioButton-icon-default-selectedForegroundColor:#5476d5;--gse-ui-radioButton-icon-hover-foregroundColor:#829ce5;--gse-ui-radioButton-icon-active-foregroundColor:#adbff0;--gse-ui-radioButton-icon-error-foregroundColor:#e84e6a;--gse-ui-radioButton-icon-height:16px;--gse-ui-radioButton-icon-width:16px;--gse-ui-radioButton-label-foregroundColor:#ffffff;--gse-ui-radioButton-label-text-fontFamily:\"Noto Sans\";--gse-ui-radioButton-label-text-fontWeight:400;--gse-ui-radioButton-label-text-fontSize:12px;--gse-ui-radioButton-label-text-lineHeight:18px;--gse-ui-radioButton-gap:8px;--gse-ui-radioButton-helper-padding:4px 0 0 24px;--gse-ui-radioButton-helper-gap:8px;--gse-ui-radioButton-disabled-opacity:0.5;--gse-ui-radioButton-focus-border-color:#5476d5;--gse-ui-radioButton-focus-border-width:2px;--gse-ui-radioButton-focus-border-style:solid;--gse-ui-radioButton-focus-borderRadius:100%;--gse-ui-radioButton-focus-offset:1px;--gse-ui-checkbox-icon-default-unselectedForegroundColor:#848891;--gse-ui-checkbox-icon-default-selectedForegroundColor:#5476d5;--gse-ui-checkbox-icon-hover-foregroundColor:#829ce5;--gse-ui-checkbox-icon-active-foregroundColor:#adbff0;--gse-ui-checkbox-icon-error-foregroundColor:#e84e6a;--gse-ui-checkbox-icon-height:16px;--gse-ui-checkbox-icon-width:16px;--gse-ui-checkbox-label-foregroundColor:#ffffff;--gse-ui-checkbox-label-text-fontFamily:\"Noto Sans\";--gse-ui-checkbox-label-text-fontWeight:400;--gse-ui-checkbox-label-text-fontSize:12px;--gse-ui-checkbox-label-text-lineHeight:18px;--gse-ui-checkbox-helper-padding:4px 0 0 24px;--gse-ui-checkbox-helper-gap:8px;--gse-ui-checkbox-gap:8px;--gse-ui-checkbox-disabled-opacity:0.5;--gse-ui-checkbox-focus-border-color:#5476d5;--gse-ui-checkbox-focus-border-width:2px;--gse-ui-checkbox-focus-border-style:solid;--gse-ui-checkbox-focus-borderRadius:4px;--gse-ui-checkbox-focus-borderRadiusSmall:2px;--gse-ui-checkbox-focus-offset:1px;--gse-ui-checkbox-group-gap:8px;--gse-ui-menu-option-gap:8px;--gse-ui-menu-option-height:32px;--gse-ui-menu-option-startIcon-height:16px;--gse-ui-menu-option-startIcon-width:16px;--gse-ui-menu-option-label-default-text-fontFamily:\"Noto Sans\";--gse-ui-menu-option-label-default-text-fontWeight:400;--gse-ui-menu-option-label-default-text-fontSize:12px;--gse-ui-menu-option-label-default-text-lineHeight:18px;--gse-ui-menu-option-label-active-text-fontFamily:\"Noto Sans\";--gse-ui-menu-option-label-active-text-fontWeight:700;--gse-ui-menu-option-label-active-text-fontSize:12px;--gse-ui-menu-option-label-active-text-lineHeight:18px;--gse-ui-menu-option-label-foregroundColor:#ffffff;--gse-ui-menu-option-shortcut-text-fontFamily:\"Noto Sans\";--gse-ui-menu-option-shortcut-text-fontWeight:400;--gse-ui-menu-option-shortcut-text-fontSize:14px;--gse-ui-menu-option-shortcut-text-lineHeight:20px;--gse-ui-menu-option-shortcut-default-foregroundColor:#c1c6d4;--gse-ui-menu-option-shortcut-selected-foregroundColor:#ffffff;--gse-ui-menu-option-hover-backgroundColor:#465066;--gse-ui-menu-option-selected-backgroundColor:#475675;--gse-ui-menu-option-disabled-opacity:0.5;--gse-ui-menu-option-checkbox-unchecked-default-foregroundColor:#848891;--gse-ui-menu-option-checkbox-unchecked-hover-foregroundColor:#829ce5;--gse-ui-menu-option-checkbox-unchecked-selected-foregroundColor:#adbff0;--gse-ui-menu-option-checkbox-checked-default-foregroundColor:#5476d5;--gse-ui-menu-option-checkbox-checked-hover-foregroundColor:#829ce5;--gse-ui-menu-option-checkbox-checked-selected-foregroundColor:#adbff0;--gse-ui-menu-option-parentIcon-width:16px;--gse-ui-menu-option-parentIcon-height:16px;--gse-ui-menu-option-parentIcon-default-foregroundColor:#b2b7c4;--gse-ui-menu-option-parentIcon-hover-foregroundColor:#cad1e1;--gse-ui-menu-option-parentIcon-selected-foregroundColor:#ffffff;--gse-ui-menu-option-focus-border-color:#5476d5;--gse-ui-menu-option-focus-border-width:1px;--gse-ui-menu-option-focus-border-style:solid;--gse-ui-menu-option-default-backgroundColor:#2a2a2e;--gse-ui-menu-option-padding:0px 12px;--gse-ui-menu-option-subtext-padding:8px 12px;--gse-ui-menu-maxHeight:344px;--gse-ui-menu-borderRadius:4px;--gse-ui-menu-border-color:#4f5157;--gse-ui-menu-border-width:1px;--gse-ui-menu-border-style:solid;--gse-ui-menu-boxShadow:0 0 4px 1px #000000b3;--gse-ui-menu-padding:8px 0px;--gse-ui-menu-backgroundColor:#2a2a2e;--gse-ui-menu-scrollbar-foregroundColor:#b2b7c4;--gse-ui-menu-divider-backgroundColor:#4f5157;--gse-ui-menu-divider-margin:4px 0 8px 0;--gse-ui-menu-divider-height:1px;--gse-ui-menu-groupedMenu-title-padding:8px 12px 4px;--gse-ui-menu-groupedMenu-title-height:32px;--gse-ui-menu-groupedMenu-title-foregroundColor:#c1c6d4;--gse-ui-menu-groupedMenu-title-text-fontFamily:Urbanist;--gse-ui-menu-groupedMenu-title-text-fontWeight:600;--gse-ui-menu-groupedMenu-title-text-fontSize:12px;--gse-ui-menu-groupedMenu-title-text-lineHeight:16px;--gse-ui-menu-groupedMenu-title-text-textCase:uppercase;--gse-ui-menu-groupedMenu-title-text-letterSpacing:1px;--gse-ui-menu-groupedMenu-padding:8px 1px;--gse-ui-menu-groupedMenu-divider-padding:4px 0px 8px;--gse-ui-menu-groupedMenu-divider-height:13px;--gse-ui-menu-groupedMenu-subtext-foregroundColor:#b2b7c4;--gse-ui-menu-selectAll-padding:12px;--gse-ui-menu-selectAll-gap:8px;--gse-ui-menu-selectAll-labelContainer-padding:2px 12px;--gse-ui-menu-selectAll-labelContainer-gap:8px;--gse-ui-menu-selectAll-label-gap:4px;--gse-ui-menu-selectAll-label-foregroundColor:#ffffff;--gse-ui-menu-selectAll-backgroundColor:#2a2a2e;--gse-ui-menu-selectAll-divider-default:#4f5157;--gse-ui-menu-selectAll-divider-adjacentSelected:#4f5157;--gse-ui-menu-selectAll-scrolling-boxShadow:0 0 8px 1px\n    rgba(35, 57, 92, 0.15);--gse-ui-dropdown-menu-emptyState-header-text-fontFamily:Roboto;--gse-ui-dropdown-menu-emptyState-header-text-fontWeight:700;--gse-ui-dropdown-menu-emptyState-header-text-lineHeight:18px;--gse-ui-dropdown-menu-emptyState-header-text-fontSize:12px;--gse-ui-dropdown-menu-emptyState-header-foregroundColor:#ffffff;--gse-ui-dropdown-menu-emptyState-subheader-text-fontFamily:Roboto;--gse-ui-dropdown-menu-emptyState-subheader-text-fontWeight:400;--gse-ui-dropdown-menu-emptyState-subheader-text-lineHeight:18px;--gse-ui-dropdown-menu-emptyState-subheader-text-fontSize:12px;--gse-ui-dropdown-menu-emptyState-subheader-foregroundColor:#b2b7c4;--gse-ui-dropdown-menu-selectAll-labelText-fontFamily:\"Noto Sans\";--gse-ui-dropdown-menu-selectAll-labelText-fontWeight:400;--gse-ui-dropdown-menu-selectAll-labelText-fontSize:12px;--gse-ui-dropdown-menu-selectAll-labelText-lineHeight:18px;--gse-ui-dropdown-menu-selectAll-counterText-fontFamily:\"Noto Sans\";--gse-ui-dropdown-menu-selectAll-counterText-fontWeight:600;--gse-ui-dropdown-menu-selectAll-counterText-fontSize:12px;--gse-ui-dropdown-menu-selectAll-counterText-lineHeight:18px;--gse-ui-dropdown-gap:4px;--gse-ui-datePicker-range-gap:24px;--gse-ui-datePicker-startEndInput-gap:8px;--gse-ui-datePicker-dateTyped-gap:10px;--gse-ui-datePicker-dateTyped-backgroundColor:#465066;--gse-ui-datePicker-disabled-opacity:0.5;--gse-ui-datePicker-focusCalendar-gap:2px;--gse-ui-datePicker-iconHover:#cad1e1;--gse-ui-datePicker-iconFocus:#ffffff;--gse-ui-datePicker-dateTime-inputRight-borderRadius:0px 4px 4px 0px;--gse-ui-datePicker-dateTime-inputRight-focus-borderRadius:0px 4px 4px 0px;--gse-ui-datePicker-dateTime-inputLeft-borderRadius:4px 0px 0px 4px;--gse-ui-datePicker-dateTime-inputLeft-focus-borderRadius:4px 0px 0px 4px;--gse-ui-datePicker-dateTime-gap:-1px;--gse-ui-datePicker-preset-padding:20px 16px;--gse-ui-datePicker-preset-gap:4px;--gse-ui-toggle-label-fontFamily:\"Noto Sans\";--gse-ui-toggle-label-fontWeight:400;--gse-ui-toggle-label-fontSize:12px;--gse-ui-toggle-label-lineHeight:18px;--gse-ui-toggle-gap:8px;--gse-ui-toggle-padding:8px;--gse-ui-toggle-track-width:32px;--gse-ui-toggle-track-height:16px;--gse-ui-toggle-track-enabled-off-backgroundColor:#848891;--gse-ui-toggle-track-enabled-on-backgroundColor:#5476d5;--gse-ui-toggle-track-disabled-off-backgroundColor:#848891;--gse-ui-toggle-track-disabled-on-backgroundColor:#5476d5;--gse-ui-toggle-track-error-off-backgroundColor:#440a15;--gse-ui-toggle-track-error-on-backgroundColor:#e84e6a;--gse-ui-toggle-track-hover-off-backgroundColor:#465066;--gse-ui-toggle-track-hover-on-backgroundColor:#829ce5;--gse-ui-toggle-track-borderRadius:16px;--gse-ui-toggle-handle-width:16px;--gse-ui-toggle-handle-height:16px;--gse-ui-toggle-handle-hover-border-width:2px;--gse-ui-toggle-handle-hover-border-style:solid;--gse-ui-toggle-handle-hover-border-color:#2954cb;--gse-ui-toggle-handle-enabled-border-width:2px;--gse-ui-toggle-handle-enabled-border-color:#5476d5;--gse-ui-toggle-handle-enabled-border-style:solid;--gse-ui-toggle-handle-disabled-border-width:2px;--gse-ui-toggle-handle-disabled-border-color:#5476d5;--gse-ui-toggle-handle-disabled-border-style:solid;--gse-ui-toggle-handle-error-border-color:#881429;--gse-ui-toggle-handle-error-border-width:2px;--gse-ui-toggle-handle-error-border-style:solid;--gse-ui-toggle-handle-backgroundColor:#2a2a2e;--gse-ui-toggle-handle-foregroundColor:#5476d5;--gse-ui-toggle-handle-borderRadius:16px;--gse-ui-toggle-disabled-opacity:0.5;--gse-ui-toggle-focus-border-color:#5476d5;--gse-ui-toggle-focus-border-width:2px;--gse-ui-toggle-focus-border-style:solid;--gse-ui-toggle-focus-borderRadius:20px;--gse-ui-toggle-focus-offset:1px;--gse-ui-timePicker-clock-padding:2px;--gse-ui-timePicker-clockStates-defaultColor:#b2b7c4;--gse-ui-timePicker-clockStates-hoverColor:#cad1e1;--gse-ui-timePicker-clockStates-activeColor:#ffffff;--gse-ui-timePicker-clockStates-disabledColor:#b2b7c480;--gse-ui-timePicker-focusClock-border-color:#5476d5;--gse-ui-timePicker-focusClock-border-width:2px;--gse-ui-timePicker-focusClock-border-style:solid;--gse-ui-timePicker-focusClock-borderRadius:4px;--gse-ui-timePicker-focusAmpm-border-color:#5476d5;--gse-ui-timePicker-focusAmpm-border-width:2px;--gse-ui-timePicker-focusAmpm-border-style:solid;--gse-ui-timePicker-focusAmpm-borderRadius:4px;--gse-ui-timePicker-focusTime-border-color:#5476d5;--gse-ui-timePicker-focusTime-border-width:2px;--gse-ui-timePicker-focusTime-border-style:solid;--gse-ui-timePicker-focusTime-borderRadius:4px;--gse-ui-timePicker-ampm-padding:2px;--gse-ui-fileUpload-fileCard-borderRadius:4px;--gse-ui-fileUpload-fileCard-cardGroup-gap:8px;--gse-ui-fileUpload-fileCard-fileName-text-fontFamily:\"Noto Sans\";--gse-ui-fileUpload-fileCard-fileName-text-fontWeight:400;--gse-ui-fileUpload-fileCard-fileName-text-fontSize:12px;--gse-ui-fileUpload-fileCard-fileName-text-lineHeight:18px;--gse-ui-fileUpload-fileCard-fileName-default:#ffffff;--gse-ui-fileUpload-fileCard-error-errorMessage:#e84e6a;--gse-ui-fileUpload-fileCard-error-errorHelper:#c1c6d4;--gse-ui-fileUpload-fileCard-error-text-fontFamily:\"Noto Sans\";--gse-ui-fileUpload-fileCard-error-text-fontWeight:400;--gse-ui-fileUpload-fileCard-error-text-fontSize:12px;--gse-ui-fileUpload-fileCard-error-text-lineHeight:18px;--gse-ui-fileUpload-fileCard-card-padding:2px 8px;--gse-ui-fileUpload-fileCard-card-gap:4px;--gse-ui-fileUpload-fileCard-card-errorCard-fileNameSection-padding:0 8px;--gse-ui-fileUpload-fileCard-card-errorCard-errorTextSection-padding:0 8px;--gse-ui-fileUpload-fileCard-card-errorCard-errorTextSection-gap:4px;--gse-ui-fileUpload-fileCard-card-errorCard-mainContainer-padding:4px 0 8px;--gse-ui-fileUpload-fileCard-mainContainer-default-border-color:#4f5157;--gse-ui-fileUpload-fileCard-mainContainer-default-border-width:1px;--gse-ui-fileUpload-fileCard-mainContainer-default-border-style:solid;--gse-ui-fileUpload-fileCard-mainContainer-error-border-color:#881429;--gse-ui-fileUpload-fileCard-mainContainer-error-border-width:1px;--gse-ui-fileUpload-fileCard-mainContainer-error-border-style:solid;--gse-ui-fileUpload-fileCard-boxShadow:0 0 4px 1px #000000b3;--gse-ui-fileUpload-fileCard-statusIcon-success:#09b581;--gse-ui-fileUpload-fileCard-statusIcon-error:#e84e6a;--gse-ui-fileUpload-fileCard-foregroundColor:#1e1e21;--gse-ui-fileUpload-dropZone-borderRadius:4px;--gse-ui-fileUpload-labelHelper-gap:4px;--gse-ui-fileUpload-mainContainer-gap:12px;--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontFamily:\"Noto Sans\";--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontWeight:400;--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontSize:12px;--gse-ui-fileUpload-dragAndDrop-dropZone-text-lineHeight:18px;--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-color:#848891;--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-width:1px;--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-style:dashed;--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-color:#adbff0;--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-width:2px;--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-style:dashed;--gse-ui-fileUpload-dragAndDrop-dropZone-minHeight:112px;--gse-ui-fileUpload-dragAndDrop-dropZone-background-active:#465066;--gse-ui-fileUpload-dragAndDrop-dropZoneText-color:#ffffff;--gse-ui-fileUpload-dragDrop-btnText-gap:12px;--gse-ui-colorPicker-label-requiredSymbolColor:#e84e6a;--gse-ui-colorPicker-label-textColor:#ffffff;--gse-ui-colorPicker-label-text-fontFamily:\"Noto Sans\";--gse-ui-colorPicker-label-text-fontWeight:400;--gse-ui-colorPicker-label-text-fontSize:12px;--gse-ui-colorPicker-label-text-lineHeight:18px;--gse-ui-colorPicker-inputContainer-backgroundColor:#1e1e21;--gse-ui-colorPicker-inputContainer-border-defaultColor:#848891;--gse-ui-colorPicker-inputContainer-border-hoverColor:#829ce5;--gse-ui-colorPicker-inputContainer-border-activeColor:#adbff0;--gse-ui-colorPicker-inputContainer-border-errorColor:#e22245;--gse-ui-colorPicker-input-containerSizing:32px;--gse-ui-colorPicker-input-swatchSizing:24px;--gse-ui-colorPicker-input-swatchBorderRadius:2px;--gse-ui-colorPicker-gap:8px;--gse-ui-rangeSlider-handle-width:20px;--gse-ui-rangeSlider-handle-height:20px;--gse-ui-rangeSlider-handle-default-backgroundColor:#5476d5;--gse-ui-rangeSlider-handle-hover-backgroundColor:#829ce5;--gse-ui-rangeSlider-handle-active-backgroundColor:#adbff0;--gse-ui-rangeSlider-handle-disabled-backgroundColor:#5476d5;--gse-ui-rangeSlider-handle-borderRadius:100%;--gse-ui-rangeSlider-disabled-opacity:0.5;--gse-ui-rangeSlider-label-text-fontFamily:\"Noto Sans\";--gse-ui-rangeSlider-label-text-fontWeight:600;--gse-ui-rangeSlider-label-text-fontSize:14px;--gse-ui-rangeSlider-label-text-lineHeight:20px;--gse-ui-rangeSlider-label-foregroundColor:#ffffff;--gse-ui-rangeSlider-bar-selected-backgroundColor:#5476d5;--gse-ui-rangeSlider-bar-default-backgroundColor:#848891;--gse-ui-rangeSlider-bar-height:4px;--gse-ui-rangeSlider-gap:16px;--gse-ui-rangeSlider-focusRing-borderRadius:100%;--gse-ui-rangeSlider-track-borderRadius:4px;--gse-ui-rangeSlider-set-height:20px;--gse-ui-flyoutMenu-anchor-height:8px;--gse-ui-flyoutMenu-anchor-width:76px;--gse-ui-flyoutMenu-width:208px;--gse-ui-flyoutMenu-borderRadius:4px;--gse-ui-flyoutMenu-padding:8px 0px;--gse-ui-flyoutMenu-parenting-gap:8px;--gse-ui-flyoutMenu-backgroundColor:#2a2a2e;--gse-ui-flyoutMenu-arrow-borderRadius:4px;--gse-ui-phoneInput-dropdown-hover-backgroundColor:#465066;--gse-ui-phoneInput-dropdown-active-backgroundColor:#475675;--gse-ui-phoneInput-dropdown-foregroundColor:#c1c6d4;--gse-ui-phoneInput-dropdown-flag-height:12px;--gse-ui-phoneInput-dropdown-flag-width:16px;--gse-ui-phoneInput-dropdown-height:32px;--gse-ui-phoneInput-dropdown-menu-minWidth:230px;--gse-ui-phoneInput-dropdown-icon-width:16px;--gse-ui-phoneInput-dropdown-icon-height:16px;--gse-ui-phoneInput-dropdown-padding:0 8px 0 12px;--gse-ui-phoneInput-dropdown-disabled-padding:0 4px 0 12px;--gse-ui-phoneInput-dropdown-gap:4px;--gse-ui-phoneInput-countryCode-foregroundColor:#ffffff;--gse-ui-phoneInput-minWidth:230px;--gse-ui-contextMenu-button-default:32px;--gse-ui-contextMenu-button-compact:24px;--gse-ui-contextMenu-borderRadius:4px;--gse-ui-contextMenu-menu-maxHeight:344px;--gse-ui-contextMenu-menu-width:220px;--gse-ui-monthPicker-calendarStates-defaultColor:#b2b7c4;--gse-ui-monthPicker-calendarStates-hoverColor:#cad1e1;--gse-ui-monthPicker-calendarStates-activeColor:#ffffff;--gse-ui-monthPicker-calendarStates-disabledColor:#b2b7c480;--gse-ui-monthPicker-calendarStates-focus-border-color:#5476d5;--gse-ui-monthPicker-calendarStates-focus-border-width:2px;--gse-ui-monthPicker-calendarStates-focus-border-style:solid;--gse-ui-selectorCard-ilustrativeIcon-foregroundColor:#b2b7c4;--gse-ui-selectorCard-text-foregroundColor:#ffffff;--gse-ui-selectorCard-default-backgroundColor:#2a2a2e;--gse-ui-selectorCard-default-selectedIndicator-selected-foregroundColor:#5476d5;--gse-ui-selectorCard-default-selectedIndicator-unselected-foregroundColor:#848891;--gse-ui-selectorCard-hover-backgroundColor:#465066;--gse-ui-selectorCard-hover-selectedIndicator-foregroundColor:#829ce5;--gse-ui-selectorCard-active-backgroundColor:#475675;--gse-ui-selectorCard-active-selectedIndicator-foregroundColor:#adbff0;--gse-ui-selectorCard-error-backgroundColor:#440a15;--gse-ui-selectorCard-error-selectedIndicator-foregroundColor:#e84e6a;--gse-ui-selectorCard-error-border-color:#881429;--gse-ui-selectorCard-error-border-width:1px;--gse-ui-selectorCard-error-border-style:solid;--gse-ui-selectorCard-simple-minWidth:108px;--gse-ui-selectorCard-simple-maxWidth:316px;--gse-ui-selectorCard-simple-minHeight:76px;--gse-ui-selectorCard-simple-maxHeight:116px;--gse-ui-selectorCard-simple-padding:12px;--gse-ui-selectorCard-simple-gap:8px;--gse-ui-selectorCard-simple-borderRadius:4px;--gse-ui-selectorCard-simple-label-fontFamily:Urbanist;--gse-ui-selectorCard-simple-label-fontWeight:700;--gse-ui-selectorCard-simple-label-fontSize:14px;--gse-ui-selectorCard-simple-label-lineHeight:24px;--gse-ui-selectorCard-descriptive-minWidth:216px;--gse-ui-selectorCard-descriptive-maxWidth:316px;--gse-ui-selectorCard-descriptive-minHeight:118px;--gse-ui-selectorCard-descriptive-maxHeight:220px;--gse-ui-selectorCard-descriptive-padding:16px;--gse-ui-selectorCard-descriptive-gap:8px;--gse-ui-selectorCard-descriptive-text-gap:4px;--gse-ui-selectorCard-descriptive-badge-marginTop:8px;--gse-ui-selectorCard-descriptive-borderRadius:4px;--gse-ui-selectorCard-descriptive-label-fontFamily:Urbanist;--gse-ui-selectorCard-descriptive-label-fontWeight:700;--gse-ui-selectorCard-descriptive-label-fontSize:16px;--gse-ui-selectorCard-descriptive-label-lineHeight:24px;--gse-ui-selectorCard-descriptive-description-fontFamily:\"Noto Sans\";--gse-ui-selectorCard-descriptive-description-fontWeight:400;--gse-ui-selectorCard-descriptive-description-fontSize:12px;--gse-ui-selectorCard-descriptive-description-lineHeight:18px;--gse-ui-selectorCard-unselected-border-color:#4f5157;--gse-ui-selectorCard-unselected-border-width:1px;--gse-ui-selectorCard-unselected-border-style:solid;--gse-ui-selectorCard-selected-border-color:#5476d5;--gse-ui-selectorCard-selected-border-width:1px;--gse-ui-selectorCard-selected-border-style:solid;--gse-ui-selectorCard-disabled-opacity:0.5;--gse-ui-selectorCard-disabled-backgroundColor:#2a2a2e;--gse-ui-selectorCard-disabled-selectedIndicator-selected-foregroundColor:#5476d5;--gse-ui-selectorCard-disabled-selectedIndicator-unselected-foregroundColor:#848891;--gse-ui-ctaGroup-gap:8px;--gse-ui-stepper-icon-height:16px;--gse-ui-stepper-icon-width:16px;--gse-ui-stepper-icon-completed-selectedForegroundColor:#ffffff;--gse-ui-stepper-icon-active-foregroundColor:#ffffff;--gse-ui-stepper-icon-error-foregroundColor:#e84e6a;--gse-ui-stepper-icon-incompleted-foregroundColor:#cad1e1;--gse-ui-stepper-bar-horizontal-height:3px;--gse-ui-stepper-bar-vertical-width:3px;--gse-ui-stepper-bar-completed-selectedForegroundColor:#ffffff;--gse-ui-stepper-bar-active-foregroundColor:#ffffff;--gse-ui-stepper-bar-error-foregroundColor:#e84e6a;--gse-ui-stepper-bar-incompleted-foregroundColor:#c1c6d4;--gse-ui-stepper-step-horizontal-minWidth:128px;--gse-ui-stepper-step-horizontal-body-marginRight:16px;--gse-ui-stepper-step-horizontal-gap:12px;--gse-ui-stepper-step-vertical-minHeight:90px;--gse-ui-stepper-step-vertical-body-marginRight:16px;--gse-ui-stepper-step-vertical-body-marginTop:4px;--gse-ui-stepper-step-vertical-gap:12px;--gse-ui-stepper-step-gap:12px;--gse-ui-stepper-step-text-gap:4px;--gse-ui-stepper-step-focus-border-color:#5476d5;--gse-ui-stepper-step-focus-border-width:2px;--gse-ui-stepper-step-focus-border-style:solid;--gse-ui-stepper-step-focus-borderRadius:4px;--gse-ui-stepper-step-disabled-opacity:0.5;--gse-ui-stepper-focus-offset:2px;--gse-ui-stepper-title-hover:#ffffff;--gse-ui-stepper-title-default:#cad1e1;--gse-ui-stepper-default-text-fontFamily:Urbanist;--gse-ui-stepper-default-text-fontWeight:700;--gse-ui-stepper-default-text-fontSize:14px;--gse-ui-stepper-default-text-lineHeight:16px;--gse-ui-stepper-hover-text-fontFamily:Urbanist;--gse-ui-stepper-hover-text-fontWeight:700;--gse-ui-stepper-hover-text-fontSize:14px;--gse-ui-stepper-hover-text-lineHeight:16px;--gse-ui-stepper-hover-text-textDecoration:underline;--gse-ui-calendar-ctaGroup-padding:18px 24px;--gse-ui-ratingGroup-gap-md:4px;--gse-ui-ratingGroup-gap-lg:8px;--gse-ui-ratingGroup-label:#ffffff;--gse-ui-ratingGroup-text-fontFamily:\"Noto Sans\";--gse-ui-ratingGroup-text-fontWeight:600;--gse-ui-ratingGroup-text-fontSize:12px;--gse-ui-ratingGroup-text-lineHeight:18px;--gse-ui-ratingGroup-shortened-gap:8px;--gse-ui-ratingGroup-shortened-edit-gap:4px;--gse-ui-promptInput-simple-padding:12px 16px;--gse-ui-promptInput-simple-gap:16px;--gse-ui-promptInput-simple-label-maxHeight:200px;--gse-ui-promptInput-simple-label-minHeight:32px;--gse-ui-promptInput-complex-padding:16px;--gse-ui-promptInput-complex-gap:16px;--gse-ui-promptInput-complex-lowerContainer-leftAligned-gap:4px;--gse-ui-promptInput-complex-lowerContainer-rightAligned-gap:16px;--gse-ui-promptInput-complex-label-maxHeight:160px;--gse-ui-promptInput-complex-fileContainer-gap:8px;--gse-ui-promptInput-border-default:#3e4044;--gse-ui-promptInput-border-hover:#19327a;--gse-ui-promptInput-border-active:#ffffff;--gse-ui-promptInput-background:#2a2a2e;--gse-ui-promptInput-focus:#5476d5;--gse-ui-promptInput-borderRadius:4px;--gse-ui-promptInput-focusContainer-border-color:#5476d5;--gse-ui-promptInput-focusContainer-border-width:2px;--gse-ui-promptInput-focusContainer-border-style:solid;--gse-ui-promptInput-label-placeholder:#c1c6d4;--gse-ui-promptInput-label-populated:#ffffff;--gse-ui-promptInput-label-text-fontFamily:\"Noto Sans\";--gse-ui-promptInput-label-text-fontWeight:400;--gse-ui-promptInput-label-text-fontSize:14px;--gse-ui-promptInput-label-text-lineHeight:20px;--gse-ui-promptInput-divider:#4f5157;--gse-ui-promptInput-cautionMessage-default:#b2b7c4;--gse-ui-promptInput-cautionMessage-text-fontFamily:\"Noto Sans\";--gse-ui-promptInput-cautionMessage-text-fontWeight:400;--gse-ui-promptInput-cautionMessage-text-fontSize:10px;--gse-ui-promptInput-cautionMessage-text-lineHeight:14px;--gse-ui-promptInput-cautionMessage-link-fontFamily:\"Noto Sans\";--gse-ui-promptInput-cautionMessage-link-fontWeight:600;--gse-ui-promptInput-cautionMessage-link-fontSize:10px;--gse-ui-promptInput-cautionMessage-link-lineHeight:14px;--gse-ui-promptInput-cautionMessage-link-textDecoration:underline;--gse-ui-promptInput-default-border-color:#3e4044;--gse-ui-promptInput-default-border-width:1px;--gse-ui-promptInput-default-border-style:solid;--gse-ui-promptInput-hover-border-color:#19327a;--gse-ui-promptInput-hover-border-width:1px;--gse-ui-promptInput-hover-border-style:solid;--gse-ui-promptInput-active-border-color:#ffffff;--gse-ui-promptInput-active-border-width:1px;--gse-ui-promptInput-active-border-style:solid;--gse-ui-promptInput-gap:12px;--gse-ui-search-counter-default-foregroundColor:#c1c6d4;--gse-ui-search-counter-hover-foregroundColor:#829ce5;--gse-ui-search-counter-divider-border-color:#848891;--gse-ui-search-counter-divider-border-width:1px;--gse-ui-search-counter-divider-border-style:solid;--gse-ui-search-counter-divider-foregroundColor:#848891;--gse-ui-search-counter-divider-height:16px;--gse-ui-search-counter-text-fontFamily:\"Noto Sans\";--gse-ui-search-counter-text-fontWeight:400;--gse-ui-search-counter-text-fontSize:12px;--gse-ui-search-counter-text-lineHeight:18px;--gse-ui-search-counter-gap:4px;--gse-ui-search-counter-icon-height:16px;--gse-ui-search-counter-icon-width:16px;--gse-ui-search-width:320px;--gse-ui-search-match-firstLevel-backgroundColor:#81cbe5;--gse-ui-search-match-firstLevel-foregroundColour:#2a2a2e;--gse-ui-search-match-subsequentLevel-foregroundColour:#2a2a2e;--gse-ui-search-match-subsequentLevel-backgroundColor:#9fd6ea;--gse-ui-simpleFilter-gap:16px;--gse-ui-dataTableItems-header-text-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-header-text-fontWeight:700;--gse-ui-dataTableItems-header-text-fontSize:12px;--gse-ui-dataTableItems-header-text-lineHeight:18px;--gse-ui-dataTableItems-header-multiselect-default-height:40px;--gse-ui-dataTableItems-header-multiselect-default-width:41px;--gse-ui-dataTableItems-header-multiselect-default-selectedBar-height:3px;--gse-ui-dataTableItems-header-multiselect-default-selectedBar-width:41px;--gse-ui-dataTableItems-header-multiselect-compact-height:32px;--gse-ui-dataTableItems-header-multiselect-compact-width:64px;--gse-ui-dataTableItems-header-multiselect-compact-selectedBar-height:3px;--gse-ui-dataTableItems-header-multiselect-compact-selectedBar-width:64px;--gse-ui-dataTableItems-header-selectedIndicatorColor:#5476d5;--gse-ui-dataTableItems-header-defaultBackgroundColor:#2a2a2e;--gse-ui-dataTableItems-header-fixedBackgroundColor:#465066;--gse-ui-dataTableItems-header-foregroundColor:#ffffff;--gse-ui-dataTableItems-header-sort-foregroundColor:#c1c6d4;--gse-ui-dataTableItems-header-default-height:40px;--gse-ui-dataTableItems-header-default-width:229px;--gse-ui-dataTableItems-header-compact-height:32px;--gse-ui-dataTableItems-header-compact-width:229px;--gse-ui-dataTableItems-header-padding:0 12px;--gse-ui-dataTableItems-header-gap:8px;--gse-ui-dataTableItems-header-selectedBar-height:3px;--gse-ui-dataTableItems-header-selectedBar-width:229px;--gse-ui-dataTableItems-divider-color:#3e4044;--gse-ui-dataTableItems-divider-width:1px;--gse-ui-dataTableItems-divider-style:solid;--gse-ui-dataTableItems-scrollbar-borderRadius:45px;--gse-ui-dataTableItems-scrollbar-foregroundColor:#c1c6d4;--gse-ui-dataTableItems-cell-altBackgroundColor:#131315;--gse-ui-dataTableItems-cell-defaultBackgroundColor:#2a2a2e;--gse-ui-dataTableItems-cell-hoverBackgroundColor:#475675;--gse-ui-dataTableItems-cell-foregroundColor:#ffffff;--gse-ui-dataTableItems-cell-chevron-foregroundColor:#c1c6d4;--gse-ui-dataTableItems-cell-multiselect-default-height:40px;--gse-ui-dataTableItems-cell-multiselect-compact-height:32px;--gse-ui-dataTableItems-cell-multiselect-padding:0 16px;--gse-ui-dataTableItems-cell-multiselect-gap:8px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-default-height:40px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-default-width:41px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-compact-height:32px;--gse-ui-dataTableItems-cell-multiselect-checkboxCell-compact-width:41px;--gse-ui-dataTableItems-cell-default-height:40px;--gse-ui-dataTableItems-cell-default-width:229px;--gse-ui-dataTableItems-cell-compact-height:32px;--gse-ui-dataTableItems-cell-compact-width:229px;--gse-ui-dataTableItems-cell-padding:0 12px;--gse-ui-dataTableItems-cell-gap:8px;--gse-ui-dataTableItems-cell-icon-foregroundColor:#ffffff;--gse-ui-dataTableItems-cell-text-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-cell-text-fontWeight:400;--gse-ui-dataTableItems-cell-text-fontSize:12px;--gse-ui-dataTableItems-cell-text-lineHeight:18px;--gse-ui-dataTableItems-cell-tablePagination-width:727px;--gse-ui-dataTableItems-cell-tablePagination-height:56px;--gse-ui-dataTableItems-cell-contextMenu-default-height:40px;--gse-ui-dataTableItems-cell-contextMenu-default-width:41px;--gse-ui-dataTableItems-cell-contextMenu-compact-height:32px;--gse-ui-dataTableItems-cell-contextMenu-compact-width:41px;--gse-ui-dataTableItems-editColumn-editColumnItem-gap:8px;--gse-ui-dataTableItems-editColumn-editColumnItem-foregroundColor:#b2b7c4;--gse-ui-dataTableItems-editColumn-editColumnItem-height:18px;--gse-ui-dataTableItems-editColumn-editColumnItem-hover-foregroundColor:#829ce5;--gse-ui-dataTableItems-editColumn-editColumnItem-active-foregroundColor:#adbff0;--gse-ui-dataTableItems-editColumn-editColumnItem-drop-borderColor:#2954cb;--gse-ui-dataTableItems-editColumn-editColumnContent-gap:10px;--gse-ui-dataTableItems-editColumn-editColumnContent-padding:8px 0;--gse-ui-dataTableItems-tableToolbar-tableToolbarGroup-gap:4px;--gse-ui-dataTableItems-tableToolbar-gap:4px;--gse-ui-dataTableItems-tableToolbar-dividerColor:#4f5157;--gse-ui-dataTableItems-tableToolbar-divider-width:1px;--gse-ui-dataTableItems-tableToolbar-divider-height:32px;--gse-ui-dataTableItems-tableToolbar-height:32px;--gse-ui-dataTableItems-tablePagination-recordsetControls-gap:10px;--gse-ui-dataTableItems-tablePagination-padding:12px;--gse-ui-dataTableItems-tablePagination-divider-color:#4f5157;--gse-ui-dataTableItems-tablePagination-divider-width:1px;--gse-ui-dataTableItems-tablePagination-divider-style:solid;--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-tablePagination-defaultText-fontWeight:400;--gse-ui-dataTableItems-tablePagination-defaultText-fontSize:12px;--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight:18px;--gse-ui-dataTableItems-tablePagination-currentResultText-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight:700;--gse-ui-dataTableItems-tablePagination-currentResultText-fontSize:12px;--gse-ui-dataTableItems-tablePagination-currentResultText-lineHeight:18px;--gse-ui-dataTableItems-tablePagination-defaultBackgroundColor:#2a2a2e;--gse-ui-dataTableItems-tablePagination-foregroundColor:#ffffff;--gse-ui-dataTableItems-tablePagination-countDisplay-gap:4px;--gse-ui-dataTableItems-inlineDropdown-gap:12px;--gse-ui-dataTableItems-inlineDropdown-text:#ffffff;--gse-ui-dataTableItems-inlineDropdown-hover:#475675;--gse-ui-dataTableItems-inlineDropdown-active:#354a72;--gse-ui-dataTableItems-inlineDropdown-borderRadius:4px;--gse-ui-dataTableItems-inlineDropdown-label-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-inlineDropdown-label-fontWeight:400;--gse-ui-dataTableItems-inlineDropdown-label-fontSize:12px;--gse-ui-dataTableItems-inlineDropdown-label-lineHeight:18px;--gse-ui-dataTableItems-inlineDropdown-chevron-hover:#d5def7;--gse-ui-dataTableItems-inlineDropdown-chevron-active:#ffffff;--gse-ui-dataTableItems-inlineDropdown-chevron-default:#b2b7c4;--gse-ui-dataTableItems-statusIndicator-gap:8px;--gse-ui-dataTableItems-statusIndicator-hover:#354a72;--gse-ui-dataTableItems-statusIndicator-borderRadius:4px;--gse-ui-dataTableItems-statusIndicator-label-fontFamily:\"Noto Sans\";--gse-ui-dataTableItems-statusIndicator-label-fontWeight:400;--gse-ui-dataTableItems-statusIndicator-label-fontSize:12px;--gse-ui-dataTableItems-statusIndicator-label-lineHeight:18px;--gse-ui-dataTableItems-statusIndicator-text:#ffffff;--gse-ui-avatar-groupShapes-gap:-4px;--gse-ui-avatar-large-size:96px;--gse-ui-avatar-large-badge-size:24px;--gse-ui-avatar-large-focusRing-size:98px;--gse-ui-avatar-large-content-size:84px;--gse-ui-avatar-large-initials-fontFamily:Urbanist;--gse-ui-avatar-large-initials-fontWeight:600;--gse-ui-avatar-large-initials-fontSize:36px;--gse-ui-avatar-large-initials-lineHeight:1;--gse-ui-avatar-large-presenceRing-width:4px;--gse-ui-avatar-large-ucIntegration-size:32px;--gse-ui-avatar-presenceRing-available:linear-gradient(\n    135deg,\n    #09b581 0%,\n    #1d624f 100%\n  );--gse-ui-avatar-presenceRing-busy:linear-gradient(\n    135deg,\n    #e22245 0%,\n    #742737 100%\n  );--gse-ui-avatar-presenceRing-away:linear-gradient(\n    135deg,\n    #f8c73e 0%,\n    #7c6934 100%\n  );--gse-ui-avatar-presenceRing-onQueue:linear-gradient(\n    135deg,\n    #2954cb 0%,\n    #2a3b6d 100%\n  );--gse-ui-avatar-presenceRing-offline:linear-gradient(\n    135deg,\n    #848891 0%,\n    #4e5056 100%\n  );--gse-ui-avatar-presenceRing-outOfOffice:linear-gradient(\n    135deg,\n    #b74ba4 0%,\n    #62375d 100%\n  );--gse-ui-avatar-presenceRing-plainColors-available-default:#09b581;--gse-ui-avatar-presenceRing-plainColors-available-reduced:#1d624f;--gse-ui-avatar-presenceRing-plainColors-busy-default:#e22245;--gse-ui-avatar-presenceRing-plainColors-busy-reduced:#742737;--gse-ui-avatar-presenceRing-plainColors-away-default:#f8c73e;--gse-ui-avatar-presenceRing-plainColors-away-reduced:#7c6934;--gse-ui-avatar-presenceRing-plainColors-onQueue-default:#2954cb;--gse-ui-avatar-presenceRing-plainColors-onQueue-reduced:#2a3b6d;--gse-ui-avatar-presenceRing-plainColors-offline-default:#848891;--gse-ui-avatar-presenceRing-plainColors-offline-reduced:#4e5056;--gse-ui-avatar-presenceRing-plainColors-outOfOffice-default:#b74ba4;--gse-ui-avatar-presenceRing-plainColors-outOfOffice-reduced:#62375d;--gse-ui-avatar-medium-size:48px;--gse-ui-avatar-medium-badge-size:16px;--gse-ui-avatar-medium-focusRing-size:50px;--gse-ui-avatar-medium-content-size:40px;--gse-ui-avatar-medium-initials-fontFamily:Urbanist;--gse-ui-avatar-medium-initials-lineHeight:1;--gse-ui-avatar-medium-initials-fontSize:18px;--gse-ui-avatar-medium-initials-fontWeight:600;--gse-ui-avatar-medium-presenceRing-width:3px;--gse-ui-avatar-small-size:32px;--gse-ui-avatar-small-badge-size:8px;--gse-ui-avatar-small-focusRing-size:34px;--gse-ui-avatar-small-content-size:26px;--gse-ui-avatar-small-initials-fontFamily:Urbanist;--gse-ui-avatar-small-initials-lineHeight:1;--gse-ui-avatar-small-initials-fontSize:12px;--gse-ui-avatar-small-initials-fontWeight:600;--gse-ui-avatar-small-substract-size:30px;--gse-ui-avatar-small-presenceRing-width:2px;--gse-ui-avatar-xsmall-size:24px;--gse-ui-avatar-xsmall-focusRing-size:26px;--gse-ui-avatar-xsmall-content-size:18px;--gse-ui-avatar-xsmall-initials-fontFamily:Urbanist;--gse-ui-avatar-xsmall-initials-lineHeight:1;--gse-ui-avatar-xsmall-initials-fontSize:8px;--gse-ui-avatar-xsmall-initials-fontWeight:600;--gse-ui-avatar-xsmall-presenceRing-width:2px;--gse-ui-avatar-badge-available-color:#09b581;--gse-ui-avatar-badge-busy-color:#e22245;--gse-ui-avatar-badge-busy-icon-margin:2px;--gse-ui-avatar-badge-away-color:#f8c73e;--gse-ui-avatar-badge-away-icon-margin:2px;--gse-ui-avatar-badge-onQueue-color:#2954cb;--gse-ui-avatar-badge-offline-color:#848891;--gse-ui-avatar-badge-outOfOffice:#b74ba4;--gse-ui-avatar-badge-notification-color:#ff451a;--gse-ui-avatar-badge-foregroundDefault-color:#ffffff;--gse-ui-avatar-badge-foregroundDark-color:#4f5157;--gse-ui-avatar-badge-notifications-icon-margin:4px;--gse-ui-avatar-badge-queue-icon-margin:4px;--gse-ui-avatar-media-initialsBackground-default:#3d538f;--gse-ui-avatar-media-initialsBackground-accent1:#6a6d75;--gse-ui-avatar-media-initialsBackground-accent2:#003447;--gse-ui-avatar-media-initialsBackground-accent3:#056385;--gse-ui-avatar-media-initialsBackground-accent4:#233d57;--gse-ui-avatar-media-initialsBackground-accent5:#1a2e41;--gse-ui-avatar-media-initialsBackground-accent6:#3e4044;--gse-ui-avatar-media-initialsBackground-accent7:#89387b;--gse-ui-avatar-media-initialsBackground-accent8:#993747;--gse-ui-avatar-media-initialsBackground-accent9:#4d1c24;--gse-ui-avatar-media-initialsBackground-accent10:#664f20;--gse-ui-avatar-media-initialsBackground-accent11:#661c0a;--gse-ui-avatar-media-initialsBackground-accent12:#992910;--gse-ui-avatar-media-initialsBackground-overflowCount:#3e4044;--gse-ui-avatar-media-initialsBackground-add:#465066;--gse-ui-avatar-media-initialsForeground-default:#ffffff;--gse-ui-avatar-media-initialsForeground-inverse:#ffffff;--gse-ui-avatar-media-initialsForeground-add:#ffffff;--gse-ui-avatar-hoverModal-shroudColor:#040814a3;--gse-ui-avatar-hoverModal-foregroundColor:#1e1e21;--gse-ui-avatar-hoverModal-opacity:0.64;--gse-ui-avatar-content-borderRadius:100%;--gse-ui-avatar-content-default-border-color:#2a2a2e;--gse-ui-avatar-content-default-border-width:1px;--gse-ui-avatar-content-default-border-style:solid;--gse-ui-avatar-content-large-border-color:#2a2a2e;--gse-ui-avatar-content-large-border-width:2px;--gse-ui-avatar-content-large-border-style:solid;--gse-ui-avatar-groupSet-gap:-2px;--gse-ui-avatar-focusRing-large-borderRadius:100%;--gse-ui-avatar-focusRing-large-border-color:#5476d5;--gse-ui-avatar-focusRing-large-border-width:2px;--gse-ui-avatar-focusRing-large-border-style:solid;--gse-ui-avatar-focusRing-mediumSmall-borderRadius:100%;--gse-ui-avatar-focusRing-medium-border-color:#5476d5;--gse-ui-avatar-focusRing-medium-border-width:2px;--gse-ui-avatar-focusRing-medium-border-style:solid;--gse-ui-avatar-focusRing-small-border-color:#5476d5;--gse-ui-avatar-focusRing-small-border-width:2px;--gse-ui-avatar-focusRing-small-border-style:solid;--gse-ui-avatar-focusRing-xsmall-border-color:#5476d5;--gse-ui-avatar-focusRing-xsmall-border-width:2px;--gse-ui-avatar-focusRing-xsmall-border-style:solid;--gse-ui-avatar-focus:#5476d5;--gse-ui-avatar-addChangeImage-hoverModal-shroudSize:84px;--gse-ui-avatar-addChangeImage-icon-size:16px;--gse-ui-dataTableComposed-boxShadow:0 0 4px 1px #000000b3;--gse-ui-dataTableComposed-width:1440px;--gse-ui-focus-color:#5476d5;--gse-ui-focus-width:2px;--gse-ui-focus-style:solid;--gse-ui-dataTable-border-color:#3e4044;--gse-ui-dataTable-border-width:1px;--gse-ui-dataTable-border-style:solid;--gse-ui-tabs-item-height:40px;--gse-ui-tabs-item-horizontal-fixedHeight:40px;--gse-ui-tabs-item-horizontal-padding:11px 12px 10px;--gse-ui-tabs-item-disableOpacity:0.5;--gse-ui-tabs-item-itemText-fontFamily:\"Noto Sans\";--gse-ui-tabs-item-itemText-fontWeight:400;--gse-ui-tabs-item-itemText-fontSize:12px;--gse-ui-tabs-item-itemText-lineHeight:18px;--gse-ui-tabs-item-itemTextColor:#ffffff;--gse-ui-tabs-item-divider-horizontal-height:1px;--gse-ui-tabs-item-divider-vertical-height:40px;--gse-ui-tabs-item-divider-vertical-width:1px;--gse-ui-tabs-item-divider-dividerColor:#4f5157;--gse-ui-tabs-item-indicator-vertical-height:40px;--gse-ui-tabs-item-indicator-vertical-width:2px;--gse-ui-tabs-item-indicator-horizontal-height:2px;--gse-ui-tabs-item-indicator-hoverColor:#2143a2;--gse-ui-tabs-item-indicator-activeColor:#5476d5;--gse-ui-tabs-item-icon-iconColor:#ffffff;--gse-ui-tabs-item-icon-size:16px;--gse-ui-tabs-item-gap:8px;--gse-ui-tabs-item-vertical-fixedHeight:40px;--gse-ui-tabs-item-vertical-padding:11px 9px 10px 12px;--gse-ui-tabs-item-focusRing-offset:1px;--gse-ui-tabs-set-vertical-height:360px;--gse-ui-tabs-set-vertical-width:98px;--gse-ui-tabs-set-vertical-marginRight:16px;--gse-ui-tabs-set-horizontal-width:800px;--gse-ui-tabs-set-horizontal-height:40px;--gse-ui-tabs-set-horizontal-marginBottom:16px;--gse-ui-tabs-set-gap:-1px;--gse-ui-tabs-set-divider-horizontal-height:1px;--gse-ui-tabs-set-divider-vertical-width:1px;--gse-ui-tabs-focusRing-border-color:#5476d5;--gse-ui-tabs-focusRing-border-width:2px;--gse-ui-tabs-focusRing-border-style:solid;--gse-ui-tabs-focusRing-borderRadius:4px;--gse-ui-advancedTabs-divider-dividerColor:#4f5157;--gse-ui-advancedTabs-item-padding:11px 12px 10px;--gse-ui-advancedTabs-item-gap:8px;--gse-ui-advancedTabs-item-focus-borderRadius:8px;--gse-ui-advancedTabs-item-focus-border-color:#5476d5;--gse-ui-advancedTabs-item-focus-border-width:2px;--gse-ui-advancedTabs-item-focus-border-style:solid;--gse-ui-advancedTabs-item-backgroundColor:#2a2a2e;--gse-ui-advancedTabs-item-borderRadius:4px 4px 0 0;--gse-ui-advancedTabs-item-height:48px;--gse-ui-advancedTabs-item-width:151px;--gse-ui-advancedTabs-item-focusItem-height:53px;--gse-ui-advancedTabs-item-focusItem-width:126px;--gse-ui-advancedTabs-item-divider-bottom-height:1px;--gse-ui-advancedTabs-item-divider-right-height:32px;--gse-ui-advancedTabs-item-divider-right-width:1px;--gse-ui-advancedTabs-item-divider-border-color:#4f5157;--gse-ui-advancedTabs-item-divider-border-width:1px;--gse-ui-advancedTabs-item-divider-border-style:solid;--gse-ui-advancedTabs-item-text-color:#ffffff;--gse-ui-advancedTabs-item-text-height:9px;--gse-ui-advancedTabs-item-indicator-hoverColor:#2143a2;--gse-ui-advancedTabs-item-indicator-activeColor:#5476d5;--gse-ui-advancedTabs-item-indicator-height:2px;--gse-ui-advancedTabs-item-icon-iconColor:#ffffff;--gse-ui-advancedTabs-item-icon-size:16px;--gse-ui-advancedTabs-item-menuButton-gap:4px;--gse-ui-advancedTabs-item-menuButton-height:45px;--gse-ui-advancedTabs-item-menuButton-width:32px;--gse-ui-advancedTabs-item-menuButton-defaultColor:#b2b7c4;--gse-ui-advancedTabs-item-menuButton-activeColor:#ffffff;--gse-ui-advancedTabs-item-menuButton-focus-height:53px;--gse-ui-advancedTabs-item-menuButton-focus-width:40px;--gse-ui-advancedTabs-item-itemText-fontFamily:\"Noto Sans\";--gse-ui-advancedTabs-item-itemText-fontWeight:400;--gse-ui-advancedTabs-item-itemText-fontSize:12px;--gse-ui-advancedTabs-item-itemText-lineHeight:18px;--gse-ui-advancedTabs-item-disabled-opacity:0.5;--gse-ui-advancedTabs-button-add-height:45px;--gse-ui-advancedTabs-button-arrow-height:48px;--gse-ui-advancedTabs-set-backgroundColor:#1e1e21;--gse-ui-advancedTabs-set-standard-width:920px;--gse-ui-treeView-item-comfy-parent-padding:0px 0px 0px 8px;--gse-ui-treeView-item-comfy-child-defaultPadding:0px 0px 0px 32px;--gse-ui-treeView-item-comfy-child-selectedPadding:0px 0px 0px 24px;--gse-ui-treeView-item-comfy-leftAligned-padding:8px 4px 8px 28px;--gse-ui-treeView-item-comfy-outerGap:2px;--gse-ui-treeView-item-comfy-grandchild-defaultPadding:0px 0px 0px 56px;--gse-ui-treeView-item-comfy-grandchild-selectedPadding:0px 0px 0px 48px;--gse-ui-treeView-item-comfy-greatGrandchild-defaultPadding:0px 0px 0px 80px;--gse-ui-treeView-item-comfy-greatGrandchild-selectedPadding:0px 0px 0px 72px;--gse-ui-treeView-item-comfy-rightAligned-padding:8px 4px;--gse-ui-treeView-item-comfy-header-padding:8px 4px;--gse-ui-treeView-item-internalGap:8px;--gse-ui-treeView-item-compact-parent-padding:0px 0px 0px 8px;--gse-ui-treeView-item-compact-child-defaultPadding:0px 0px 0px 32px;--gse-ui-treeView-item-compact-child-selectedPadding:0px 0px 0px 24px;--gse-ui-treeView-item-compact-leftAligned-padding:4px 4px 4px 28px;--gse-ui-treeView-item-compact-outerGap:4px;--gse-ui-treeView-item-compact-grandchild-defaultPadding:0px 0px 0px 56px;--gse-ui-treeView-item-compact-grandchild-selectedPadding:0px 0px 0px 48px;--gse-ui-treeView-item-compact-greatGrandchild-defaultPadding:0px 0px 0px\n    80px;--gse-ui-treeView-item-compact-greatGrandchild-selectedPadding:0px 0px 0px\n    72px;--gse-ui-treeView-item-compact-rightAligned-padding:4px;--gse-ui-treeView-item-compact-heading-padding:4px;--gse-ui-treeView-group-gap:8px;--gse-ui-treeView-group-comfy-padding:8px 12px;--gse-ui-treeView-group-compact-padding:8px;--gse-ui-treeView-selectionBookmark-comfy-height:36px;--gse-ui-treeView-selectionBookmark-comfy-width:6px;--gse-ui-treeView-selectionBookmark-compact-height:26px;--gse-ui-treeView-selectionBookmark-compact-width:4px;--gse-ui-treeView-selectionBookmark-highEmphasis:#2143a2;--gse-ui-treeView-selectionBookmark-midEmphasis:#475675;--gse-ui-treeView-borderRadius:4px;--gse-ui-treeView-comfy-label-fontFamily:\"Noto Sans\";--gse-ui-treeView-comfy-label-fontWeight:400;--gse-ui-treeView-comfy-label-fontSize:14px;--gse-ui-treeView-comfy-label-lineHeight:20px;--gse-ui-treeView-compact-label-fontFamily:\"Noto Sans\";--gse-ui-treeView-compact-label-fontWeight:400;--gse-ui-treeView-compact-label-fontSize:12px;--gse-ui-treeView-compact-label-lineHeight:18px;--gse-ui-treeView-quantityMeter-fontFamily:\"Noto Sans\";--gse-ui-treeView-quantityMeter-fontWeight:400;--gse-ui-treeView-quantityMeter-fontSize:12px;--gse-ui-treeView-quantityMeter-lineHeight:18px;--gse-ui-treeView-groupHeader-heading-fontFamily:Urbanist;--gse-ui-treeView-groupHeader-heading-fontWeight:600;--gse-ui-treeView-groupHeader-heading-fontSize:16px;--gse-ui-treeView-groupHeader-heading-lineHeight:24px;--gse-ui-treeView-groupHeader-meterTitle-fontFamily:\"Noto Sans\";--gse-ui-treeView-groupHeader-meterTitle-fontWeight:600;--gse-ui-treeView-groupHeader-meterTitle-fontSize:12px;--gse-ui-treeView-groupHeader-meterTitle-lineHeight:18px;--gse-ui-treeView-groupHeader-gap:12px;--gse-ui-treeView-groupHeader-subHeading-gap:8px;--gse-ui-treeView-disableOpacity:0.5;--gse-ui-treeView-label:#ffffff;--gse-ui-treeView-background-hover:#465066;--gse-ui-treeView-background-selected:#475675;--gse-ui-treeView-background-open:#3e4044;--gse-ui-toast-closeButtonColor:#b2b7c4;--gse-ui-toast-success-backgroundColor:#2a2a2e;--gse-ui-toast-success-foregroundColor:#ffffff;--gse-ui-toast-success-iconColor:#09b581;--gse-ui-toast-warning-backgroundColor:#2a2a2e;--gse-ui-toast-warning-foregroundColor:#ffffff;--gse-ui-toast-warning-iconColor:#f8c73e;--gse-ui-toast-info-backgroundColor:#2a2a2e;--gse-ui-toast-info-foregroundColor:#ffffff;--gse-ui-toast-info-iconColor:#596ea6;--gse-ui-toast-action-backgroundColor:#2a2a2e;--gse-ui-toast-action-foregroundColor:#ffffff;--gse-ui-toast-action-iconColor:#2143a2;--gse-ui-toast-error-backgroundColor:#2a2a2e;--gse-ui-toast-error-foregroundColor:#ffffff;--gse-ui-toast-error-iconColor:#e84e6a;--gse-ui-toast-heading-fontFamily:Urbanist;--gse-ui-toast-heading-fontWeight:700;--gse-ui-toast-heading-fontSize:16px;--gse-ui-toast-heading-lineHeight:24px;--gse-ui-toast-text-fontFamily:\"Noto Sans\";--gse-ui-toast-text-fontWeight:400;--gse-ui-toast-text-fontSize:14px;--gse-ui-toast-text-lineHeight:20px;--gse-ui-toast-margin:16px;--gse-ui-toast-gap:12px;--gse-ui-toast-gapText:4px;--gse-ui-toast-gapButton:16px;--gse-ui-toast-buttonBar-gap:8px;--gse-ui-toast-borderRadius:4px;--gse-ui-toast-boxShadow:0 0 4px 1px #000000b3;--gse-ui-toast-icon:24px;--gse-ui-toast-wrappingWidth:320px;--gse-ui-toast-stacking-gap:4px;--gse-ui-toast-messageWidth:220px;--gse-ui-modal-closeButtonColor:#b2b7c4;--gse-ui-modal-headerColor:#ffffff;--gse-ui-modal-backgroundColor:#2a2a2e;--gse-ui-modal-shroudColor:#040814a3;--gse-ui-modal-header-gap:12px;--gse-ui-modal-padding:32px;--gse-ui-modal-gap:16px;--gse-ui-modal-heading-fontFamily:Urbanist;--gse-ui-modal-heading-fontWeight:700;--gse-ui-modal-heading-fontSize:24px;--gse-ui-modal-heading-lineHeight:32px;--gse-ui-modal-icon:32px;--gse-ui-modal-small-width:420px;--gse-ui-modal-medium-width:680px;--gse-ui-modal-large-width:800px;--gse-ui-modal-buttonBar-gap:8px;--gse-ui-modal-boxShadow:0 0 8px 1px #000000b3;--gse-ui-modal-borderRadius:8px;--gse-ui-modal-shroud-opacity:0.64;--gse-ui-modal-dismissButton-paddingTop:16px;--gse-ui-modal-dismissButton-paddingRight:8px;--gse-ui-popover-borderRadius:4px;--gse-ui-popover-boxShadow:0 0 8px 1px #000000b3;--gse-ui-popover-closeButtonColor:#b2b7c4;--gse-ui-popover-headerColor:#ffffff;--gse-ui-popover-backgroundColor:#2a2a2e;--gse-ui-popover-gap:16px;--gse-ui-popover-padding:24px;--gse-ui-popover-buttonsBar-gap:8px;--gse-ui-popover-header-gap:4px;--gse-ui-popover-spacer-height:16px;--gse-ui-popover-body-text-fontFamily:\"Noto Sans\";--gse-ui-popover-body-text-fontWeight:400;--gse-ui-popover-body-text-fontSize:14px;--gse-ui-popover-body-text-lineHeight:20px;--gse-ui-popover-title-text-fontFamily:Urbanist;--gse-ui-popover-title-text-fontWeight:700;--gse-ui-popover-title-text-fontSize:16px;--gse-ui-popover-title-text-lineHeight:24px;--gse-ui-popover-anchor-width:20px;--gse-ui-popover-anchor-height:8px;--gse-ui-progressAndLoading-spinner-foreground:#5476d5;--gse-ui-progressAndLoading-spinner-base:#465066;--gse-ui-progressAndLoading-spinner-large:48px;--gse-ui-progressAndLoading-spinner-small:16px;--gse-ui-progressAndLoading-spinner-text-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-spinner-text-fontWeight:600;--gse-ui-progressAndLoading-spinner-text-fontSize:12px;--gse-ui-progressAndLoading-spinner-text-lineHeight:18px;--gse-ui-progressAndLoading-textColor:#ffffff;--gse-ui-progressAndLoading-loadingState-large-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-loadingState-large-header-fontWeight:700;--gse-ui-progressAndLoading-loadingState-large-header-fontSize:24px;--gse-ui-progressAndLoading-loadingState-large-header-lineHeight:32px;--gse-ui-progressAndLoading-loadingState-large-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-loadingState-large-subheader-fontWeight:600;--gse-ui-progressAndLoading-loadingState-large-subheader-fontSize:16px;--gse-ui-progressAndLoading-loadingState-large-subheader-lineHeight:24px;--gse-ui-progressAndLoading-loadingState-large-width:600px;--gse-ui-progressAndLoading-loadingState-medium-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-loadingState-medium-header-fontWeight:700;--gse-ui-progressAndLoading-loadingState-medium-header-fontSize:18px;--gse-ui-progressAndLoading-loadingState-medium-header-lineHeight:27px;--gse-ui-progressAndLoading-loadingState-medium-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-loadingState-medium-subheader-fontWeight:600;--gse-ui-progressAndLoading-loadingState-medium-subheader-fontSize:14px;--gse-ui-progressAndLoading-loadingState-medium-subheader-lineHeight:20px;--gse-ui-progressAndLoading-loadingState-medium-width:400px;--gse-ui-progressAndLoading-loadingState-small-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-loadingState-small-header-fontWeight:700;--gse-ui-progressAndLoading-loadingState-small-header-fontSize:16px;--gse-ui-progressAndLoading-loadingState-small-header-lineHeight:24px;--gse-ui-progressAndLoading-loadingState-small-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-loadingState-small-subheader-fontWeight:600;--gse-ui-progressAndLoading-loadingState-small-subheader-fontSize:12px;--gse-ui-progressAndLoading-loadingState-small-subheader-lineHeight:18px;--gse-ui-progressAndLoading-loadingState-small-width:200px;--gse-ui-progressAndLoading-large-gap:24px;--gse-ui-progressAndLoading-large-gapText:4px;--gse-ui-progressAndLoading-pageLoading-gap:-3px;--gse-ui-progressAndLoading-medium-gap:16px;--gse-ui-progressAndLoading-medium-gapText:4px;--gse-ui-progressAndLoading-small-gap:12px;--gse-ui-progressAndLoading-small-gapText:4px;--gse-ui-progressAndLoading-blankState-large-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-blankState-large-header-fontWeight:700;--gse-ui-progressAndLoading-blankState-large-header-fontSize:18px;--gse-ui-progressAndLoading-blankState-large-header-lineHeight:27px;--gse-ui-progressAndLoading-blankState-large-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-blankState-large-subheader-fontWeight:600;--gse-ui-progressAndLoading-blankState-large-subheader-fontSize:14px;--gse-ui-progressAndLoading-blankState-large-subheader-lineHeight:20px;--gse-ui-progressAndLoading-blankState-small-header-fontFamily:Urbanist;--gse-ui-progressAndLoading-blankState-small-header-fontWeight:700;--gse-ui-progressAndLoading-blankState-small-header-fontSize:14px;--gse-ui-progressAndLoading-blankState-small-header-lineHeight:24px;--gse-ui-progressAndLoading-blankState-small-subheader-fontFamily:\"Noto Sans\";--gse-ui-progressAndLoading-blankState-small-subheader-fontWeight:600;--gse-ui-progressAndLoading-blankState-small-subheader-fontSize:12px;--gse-ui-progressAndLoading-blankState-small-subheader-lineHeight:18px;--gse-ui-progressAndLoading-largeBorder:4px;--gse-ui-progressAndLoading-smallBorder:2px;--gse-ui-progressAndLoading-thinBorder:1px;--gse-ui-blankState-small-width:250px;--gse-ui-blankState-small-maxWidth:569px;--gse-ui-blankState-large-minWidth:570px;--gse-ui-blankState-icon-size-sm:32px;--gse-ui-blankState-icon-size-lg:42px;--gse-ui-blankState-padding:32px 16px;--gse-ui-blankState-gapMessage:4px;--gse-ui-blankState-gapMain:12px;--gse-ui-blankState-gapContent:24px;--gse-ui-blankState-iconColor:#c1c6d4;--gse-ui-blankState-foregroundColor:#ffffff;--gse-ui-accordion-header-height:40px;--gse-ui-accordion-header-padding:8px 16px 8px 16px;--gse-ui-accordion-header-chevronIcon:16px;--gse-ui-accordion-header-gap:8px;--gse-ui-accordion-header-default-foreground-labelColor:#ffffff;--gse-ui-accordion-header-default-foreground-chevronIcon-closed:#b2b7c4;--gse-ui-accordion-header-default-foreground-chevronIcon-open:#ffffff;--gse-ui-accordion-header-default-foreground-chevronIcon-hover:#cad1e1;--gse-ui-accordion-header-label-defaultText-fontFamily:\"Noto Sans\";--gse-ui-accordion-header-label-defaultText-fontWeight:700;--gse-ui-accordion-header-label-defaultText-fontSize:14px;--gse-ui-accordion-header-label-defaultText-lineHeight:20px;--gse-ui-accordion-reversedHeader-padding:2px;--gse-ui-accordion-menuItem-height:32px;--gse-ui-accordion-menuItem-padding:0 12px 0 24px;--gse-ui-accordion-menuItem-startIcon:16px;--gse-ui-accordion-menuItem-parentIcon:16px;--gse-ui-accordion-menuItem-gap:8px;--gse-ui-accordion-menuItem-default-foreground-startIconColor:#ffffff;--gse-ui-accordion-menuItem-default-foreground-labelColor:#ffffff;--gse-ui-accordion-menuItem-default-foreground-startShortcutColor:#c1c6d4;--gse-ui-accordion-menuItem-default-foreground-parentIconColor:#b2b7c4;--gse-ui-accordion-menuItem-hover-foreground-startIconColor:#ffffff;--gse-ui-accordion-menuItem-hover-foreground-labelColor:#ffffff;--gse-ui-accordion-menuItem-hover-foreground-startShortcutColor:#c1c6d4;--gse-ui-accordion-menuItem-hover-foreground-parentIconColor:#cad1e1;--gse-ui-accordion-menuItem-hover-backgroundColor:#465066;--gse-ui-accordion-menuItem-selected-foreground-startIconColor:#ffffff;--gse-ui-accordion-menuItem-selected-foreground-labelColor:#ffffff;--gse-ui-accordion-menuItem-selected-foreground-startShortcutColor:#ffffff;--gse-ui-accordion-menuItem-selected-foreground-parentIconColor:#ffffff;--gse-ui-accordion-menuItem-selected-backgroundColor:#475675;--gse-ui-accordion-menuItem-focus-borderRadius:4px;--gse-ui-accordion-menuItem-label-defaultText-fontFamily:\"Noto Sans\";--gse-ui-accordion-menuItem-label-defaultText-fontWeight:400;--gse-ui-accordion-menuItem-label-defaultText-fontSize:12px;--gse-ui-accordion-menuItem-label-defaultText-lineHeight:18px;--gse-ui-accordion-menuItem-label-selectedText-fontFamily:\"Noto Sans\";--gse-ui-accordion-menuItem-label-selectedText-fontWeight:600;--gse-ui-accordion-menuItem-label-selectedText-fontSize:12px;--gse-ui-accordion-menuItem-label-selectedText-lineHeight:18px;--gse-ui-accordion-menuItem-shortcut-text-fontFamily:\"Noto Sans\";--gse-ui-accordion-menuItem-shortcut-text-fontWeight:400;--gse-ui-accordion-menuItem-shortcut-text-fontSize:14px;--gse-ui-accordion-menuItem-shortcut-text-lineHeight:20px;--gse-ui-accordion-focusBorder-color:#5476d5;--gse-ui-accordion-focusBorder-style:solid;--gse-ui-accordion-focusBorder-width:2px;--gse-ui-accordion-contentItem-padding:16px;--gse-ui-accordion-contentItem-gap:16px;--gse-ui-accordion-contentItem-foregroundColor:#ffffff;--gse-ui-accordion-contentItem-backgroundColor:#2a2a2e;--gse-ui-accordion-contentItem-defaultText-fontFamily:\"Noto Sans\";--gse-ui-accordion-contentItem-defaultText-fontWeight:400;--gse-ui-accordion-contentItem-defaultText-fontSize:12px;--gse-ui-accordion-contentItem-defaultText-lineHeight:18px;--gse-ui-accordion-wrapper-dividerBorder-color:#4f5157;--gse-ui-accordion-wrapper-dividerBorder-width:1px;--gse-ui-accordion-wrapper-dividerBorder-style:solid;--gse-ui-accordion-focus-offset-gap:1px;--gse-ui-accordion-contentPanel-paddingBottom:8px;--gse-ui-accordion-label-disabled-opacity:0.5;--gse-ui-rte-codeBlock-backgroundColor:#131315;--gse-ui-rte-codeBlock-border-color:#4f5157;--gse-ui-rte-codeBlock-border-width:1px;--gse-ui-rte-codeBlock-border-style:solid;--gse-ui-rte-codeBlock-padding:12px 8px;--gse-ui-rte-codeBlock-foregroundColor:#b2b7c4;--gse-ui-rte-codeBlock-sm-regular-fontFamily:\"Noto Sans Mono\";--gse-ui-rte-codeBlock-sm-regular-fontSize:12px;--gse-ui-rte-codeBlock-sm-regular-lineHeight:16px;--gse-ui-rte-codeBlock-sm-regular-fontWeight:400;--gse-ui-rte-codeBlock-borderRadius:4px;--gse-ui-rte-quoteBlock-margin:0 24px;--gse-ui-rte-quoteBlock-container-gap:8px;--gse-ui-rte-quoteBlock-foregroundColor:#b2b7c4;--gse-ui-rte-quoteBlock-md-regular-fontFamily:\"Noto Sans\";--gse-ui-rte-quoteBlock-md-regular-fontWeight:400;--gse-ui-rte-quoteBlock-md-regular-fontSize:14px;--gse-ui-rte-quoteBlock-md-regular-lineHeight:20px;--gse-ui-rte-quoteBlock-borderLeft-color:#829ce5;--gse-ui-rte-quoteBlock-borderLeft-width:2px;--gse-ui-rte-heading_1-foregroundColor:#b2b7c4;--gse-ui-rte-heading_1-semiBold-fontFamily:Urbanist;--gse-ui-rte-heading_1-semiBold-fontWeight:600;--gse-ui-rte-heading_1-semiBold-fontSize:24px;--gse-ui-rte-heading_1-semiBold-lineHeight:32px;--gse-ui-rte-heading_2-foregroundColor:#b2b7c4;--gse-ui-rte-heading_2-semiBold-fontFamily:Urbanist;--gse-ui-rte-heading_2-semiBold-fontWeight:600;--gse-ui-rte-heading_2-semiBold-fontSize:18px;--gse-ui-rte-heading_2-semiBold-lineHeight:27px;--gse-ui-rte-heading_3-foregroundColor:#b2b7c4;--gse-ui-rte-heading_3-semiBold-fontFamily:Urbanist;--gse-ui-rte-heading_3-semiBold-fontWeight:600;--gse-ui-rte-heading_3-semiBold-fontSize:16px;--gse-ui-rte-heading_3-semiBold-lineHeight:24px;--gse-ui-rte-paragraph-foregroundColor:#b2b7c4;--gse-ui-rte-paragraph-md-regular-fontFamily:\"Noto Sans\";--gse-ui-rte-paragraph-md-regular-fontWeight:400;--gse-ui-rte-paragraph-md-regular-fontSize:14px;--gse-ui-rte-paragraph-md-regular-lineHeight:20px;--gse-ui-rte-divider-width:1px;--gse-ui-rte-divider-height:20px;--gse-ui-rte-innerContainer-gap:16px;--gse-ui-rte-contentContainer-gap:16px;--gse-ui-rte-padding:8px 16px 16px;--gse-ui-rte-menuButton-height:24px;--gse-ui-rte-colorSwatch-orange-default:#992910;--gse-ui-rte-colorSwatch-coral-default:#662530;--gse-ui-rte-colorSwatch-pear-default:#404f22;--gse-ui-rte-colorSwatch-mango-default:#664f20;--gse-ui-rte-colorSwatch-raspberry-default:#5c2652;--gse-ui-rte-colorSwatch-azure-default:#102251;--gse-ui-rte-colorSwatch-mineral-default:#233d57;--gse-ui-rte-colorSwatch-island-default:#003447;--gse-ui-rte-colorSwatch-width:20px;--gse-ui-rte-colorSwatch-height:20px;--gse-ui-rte-colorSwatch-focusBorder-color:#5476d5;--gse-ui-rte-colorSwatch-focusBorder-width:2px;--gse-ui-rte-colorSwatch-focusBorder-style:solid;--gse-ui-rte-colorPalette-gap:8px;--gse-ui-rte-colorPalette-padding:4px 12px;--gse-ui-rte-toolbarBtnGroup-gap:4px;--gse-ui-rte-toolbar-divider-color:#4f5157;--gse-ui-rte-toolbar-divider-margin:6px 4px;--gse-ui-rte-container-borderRadius:4px;--gse-ui-rte-mainContainer-default-border-color:#848891;--gse-ui-rte-mainContainer-default-border-width:1px;--gse-ui-rte-mainContainer-default-border-style:solid;--gse-ui-rte-mainContainer-hover-border-color:#829ce5;--gse-ui-rte-mainContainer-hover-border-width:1px;--gse-ui-rte-mainContainer-hover-border-style:solid;--gse-ui-rte-mainContainer-active-border-color:#adbff0;--gse-ui-rte-mainContainer-active-border-width:1px;--gse-ui-rte-mainContainer-active-border-style:solid;--gse-ui-rte-mainContainer-disabled-border-color:#848891;--gse-ui-rte-mainContainer-disabled-border-width:1px;--gse-ui-rte-mainContainer-disabled-border-style:solid;--gse-ui-rte-mainContainer-focus-border-color:#5476d5;--gse-ui-rte-mainContainer-focus-border-width:2px;--gse-ui-rte-mainContainer-focus-border-style:solid;--gse-ui-rte-rteMenu-backgroundColor:#2a2a2e;--gse-ui-rte-rteMenu-border-color:#4f5157;--gse-ui-rte-rteMenu-border-width:1px;--gse-ui-rte-rteMenu-border-style:solid;--gse-ui-sidePanel-backgroundColor:#2a2a2e;--gse-ui-sidePanel-headerColor:#ffffff;--gse-ui-sidePanel-boxShadow:0 0 6px 1px #000000b3;--gse-ui-sidePanel-descriptionColor:#b2b7c4;--gse-ui-sidePanel-heading-text-fontFamily:Urbanist;--gse-ui-sidePanel-heading-text-fontWeight:600;--gse-ui-sidePanel-heading-text-fontSize:18px;--gse-ui-sidePanel-heading-text-lineHeight:27px;--gse-ui-sidePanel-description-text-fontFamily:\"Noto Sans\";--gse-ui-sidePanel-description-text-fontWeight:400;--gse-ui-sidePanel-description-text-fontSize:12px;--gse-ui-sidePanel-description-text-lineHeight:18px;--gse-ui-sidePanel-description-padding:16px 24px 0;--gse-ui-sidePanel-header-iconGap:12px;--gse-ui-sidePanel-header-padding:24px 24px 16px;--gse-ui-sidePanel-header-dismiss-padding:4px;--gse-ui-sidePanel-body-padding:24px;--gse-ui-sidePanel-footer-padding:16px 24px;--gse-ui-sidePanel-widthSize-sm:400px;--gse-ui-sidePanel-widthSize-md:560px;--gse-ui-sidePanel-widthSize-lg:960px;--gse-ui-sidePanel-shroud-opacity:0.64;--gse-ui-sidePanel-shroudColor:#040814a3;--gse-ui-sidePanel-divider-color:#4f5157;--gse-ui-sidePanel-divider-width:1px;--gse-ui-sidePanel-divider-style:solid;--gse-ui-sidePanel-shoud-minWidth:32px;--gse-ui-charts-areaChart-point-pointFill-default:#1e1e21;--gse-ui-charts-areaChart-point-pointFill-category1:#53bee5;--gse-ui-charts-areaChart-point-pointFill-category10:#3d538f;--gse-ui-charts-areaChart-point-pointFill-category2:#467aae;--gse-ui-charts-areaChart-point-pointFill-category3:#ac75ff;--gse-ui-charts-areaChart-point-pointFill-category4:#e55ecd;--gse-ui-charts-areaChart-point-pointFill-category5:#ff5c77;--gse-ui-charts-areaChart-point-pointFill-category6:#cc3715;--gse-ui-charts-areaChart-point-pointFill-category7:#ffc650;--gse-ui-charts-areaChart-point-pointFill-category8:#a0c654;--gse-ui-charts-areaChart-point-pointFill-category9:#54c6ab;--gse-ui-charts-areaChart-point-pointOutline-category1:#53bee5;--gse-ui-charts-areaChart-point-pointOutline-category10:#3d538f;--gse-ui-charts-areaChart-point-pointOutline-category2:#467aae;--gse-ui-charts-areaChart-point-pointOutline-category3:#ac75ff;--gse-ui-charts-areaChart-point-pointOutline-category4:#e55ecd;--gse-ui-charts-areaChart-point-pointOutline-category5:#ff5c77;--gse-ui-charts-areaChart-point-pointOutline-category6:#cc3715;--gse-ui-charts-areaChart-point-pointOutline-category7:#ffc650;--gse-ui-charts-areaChart-point-pointOutline-category8:#a0c654;--gse-ui-charts-areaChart-point-pointOutline-category9:#54c6ab;--gse-ui-charts-areaChart-line-category1-default:#53bee5;--gse-ui-charts-areaChart-line-category1-reduced:#53bee540;--gse-ui-charts-areaChart-line-category10-default:#3d538f;--gse-ui-charts-areaChart-line-category10-reduced:#3d538f40;--gse-ui-charts-areaChart-line-category2-default:#467aae;--gse-ui-charts-areaChart-line-category2-reduced:#467aae40;--gse-ui-charts-areaChart-line-category3-default:#ac75ff;--gse-ui-charts-areaChart-line-category3-reduced:#ac75ff40;--gse-ui-charts-areaChart-line-category4-default:#e55ecd;--gse-ui-charts-areaChart-line-category4-reduced:#e55ecd40;--gse-ui-charts-areaChart-line-category5-default:#ff5c77;--gse-ui-charts-areaChart-line-category5-reduced:#ff5c7740;--gse-ui-charts-areaChart-line-category6-default:#cc3715;--gse-ui-charts-areaChart-line-category6-reduced:#cc371540;--gse-ui-charts-areaChart-line-category7-default:#ffc650;--gse-ui-charts-areaChart-line-category7-reduced:#ffc65040;--gse-ui-charts-areaChart-line-category8-default:#a0c654;--gse-ui-charts-areaChart-line-category8-reduced:#a0c65440;--gse-ui-charts-areaChart-line-category9-default:#54c6ab;--gse-ui-charts-areaChart-line-category9-reduced:#54c6ab40;--gse-ui-charts-areaChart-shading-category1-default:#4793b0;--gse-ui-charts-areaChart-shading-category1-reduced:#4793b040;--gse-ui-charts-areaChart-shading-category10-default:#374773;--gse-ui-charts-areaChart-shading-category10-reduced:#37477340;--gse-ui-charts-areaChart-shading-category2-default:#3e6389;--gse-ui-charts-areaChart-shading-category2-reduced:#3e638940;--gse-ui-charts-areaChart-shading-category3-default:#865fc2;--gse-ui-charts-areaChart-shading-category3-reduced:#865fc240;--gse-ui-charts-areaChart-shading-category4-default:#af4f9f;--gse-ui-charts-areaChart-shading-category4-reduced:#af4f9f40;--gse-ui-charts-areaChart-shading-category5-default:#c14d62;--gse-ui-charts-areaChart-shading-category5-reduced:#c14d6240;--gse-ui-charts-areaChart-shading-category6-default:#9d331c;--gse-ui-charts-areaChart-shading-category6-reduced:#9d331c40;--gse-ui-charts-areaChart-shading-category7-default:#c19946;--gse-ui-charts-areaChart-shading-category7-reduced:#c1994640;--gse-ui-charts-areaChart-shading-category8-default:#7e9949;--gse-ui-charts-areaChart-shading-category8-reduced:#7e994940;--gse-ui-charts-areaChart-shading-category9-default:#489987;--gse-ui-charts-areaChart-shading-category9-reduced:#48998740;--gse-ui-charts-barChart-bar-category1-default:#53bee5;--gse-ui-charts-barChart-bar-category1-reduced:#53bee540;--gse-ui-charts-barChart-bar-category2-default:#467aae;--gse-ui-charts-barChart-bar-category2-reduced:#467aae40;--gse-ui-charts-barChart-bar-category3-default:#ac75ff;--gse-ui-charts-barChart-bar-category3-reduced:#ac75ff40;--gse-ui-charts-bubbleChart-bubbleFill-category1-default:#53bee580;--gse-ui-charts-bubbleChart-bubbleFill-category1-hover:#53bee5;--gse-ui-charts-bubbleChart-bubbleFill-category1-reduced:#53bee540;--gse-ui-charts-bubbleChart-bubbleFill-category10-default:#3d538f80;--gse-ui-charts-bubbleChart-bubbleFill-category10-hover:#3d538f;--gse-ui-charts-bubbleChart-bubbleFill-category10-reduced:#3d538f40;--gse-ui-charts-bubbleChart-bubbleFill-category2-default:#467aae80;--gse-ui-charts-bubbleChart-bubbleFill-category2-hover:#467aae;--gse-ui-charts-bubbleChart-bubbleFill-category2-reduced:#467aae40;--gse-ui-charts-bubbleChart-bubbleFill-category3-default:#ac75ff80;--gse-ui-charts-bubbleChart-bubbleFill-category3-hover:#ac75ff;--gse-ui-charts-bubbleChart-bubbleFill-category3-reduced:#ac75ff40;--gse-ui-charts-bubbleChart-bubbleFill-category4-default:#e55ecd80;--gse-ui-charts-bubbleChart-bubbleFill-category4-hover:#e55ecd;--gse-ui-charts-bubbleChart-bubbleFill-category4-reduced:#e55ecd40;--gse-ui-charts-bubbleChart-bubbleFill-category5-default:#ff5c7780;--gse-ui-charts-bubbleChart-bubbleFill-category5-hover:#ff5c77;--gse-ui-charts-bubbleChart-bubbleFill-category5-reduced:#ff5c7740;--gse-ui-charts-bubbleChart-bubbleFill-category6-default:#cc371580;--gse-ui-charts-bubbleChart-bubbleFill-category6-hover:#cc3715;--gse-ui-charts-bubbleChart-bubbleFill-category6-reduced:#cc371540;--gse-ui-charts-bubbleChart-bubbleFill-category7-default:#ffc65080;--gse-ui-charts-bubbleChart-bubbleFill-category7-hover:#ffc650;--gse-ui-charts-bubbleChart-bubbleFill-category7-reduced:#ffc65040;--gse-ui-charts-bubbleChart-bubbleFill-category8-default:#a0c65480;--gse-ui-charts-bubbleChart-bubbleFill-category8-hover:#a0c654;--gse-ui-charts-bubbleChart-bubbleFill-category8-reduced:#a0c65440;--gse-ui-charts-bubbleChart-bubbleFill-category9-default:#54c6ab80;--gse-ui-charts-bubbleChart-bubbleFill-category9-hover:#54c6ab;--gse-ui-charts-bubbleChart-bubbleFill-category9-reduced:#54c6ab40;--gse-ui-charts-bubbleChart-bubbleOutline-category1-default:#53bee5;--gse-ui-charts-bubbleChart-bubbleOutline-category1-reduced:#53bee540;--gse-ui-charts-bubbleChart-bubbleOutline-category10-default:#3d538f;--gse-ui-charts-bubbleChart-bubbleOutline-category10-reduced:#3d538f40;--gse-ui-charts-bubbleChart-bubbleOutline-category2-default:#467aae;--gse-ui-charts-bubbleChart-bubbleOutline-category2-reduced:#467aae40;--gse-ui-charts-bubbleChart-bubbleOutline-category3-default:#ac75ff;--gse-ui-charts-bubbleChart-bubbleOutline-category3-reduced:#ac75ff40;--gse-ui-charts-bubbleChart-bubbleOutline-category4-default:#e55ecd;--gse-ui-charts-bubbleChart-bubbleOutline-category4-reduced:#e55ecd40;--gse-ui-charts-bubbleChart-bubbleOutline-category5-default:#ff5c77;--gse-ui-charts-bubbleChart-bubbleOutline-category5-reduced:#ff5c7740;--gse-ui-charts-bubbleChart-bubbleOutline-category6-default:#cc3715;--gse-ui-charts-bubbleChart-bubbleOutline-category6-reduced:#cc371540;--gse-ui-charts-bubbleChart-bubbleOutline-category7-default:#ffc650;--gse-ui-charts-bubbleChart-bubbleOutline-category7-reduced:#ffc65040;--gse-ui-charts-bubbleChart-bubbleOutline-category8-default:#a0c654;--gse-ui-charts-bubbleChart-bubbleOutline-category8-reduced:#a0c65440;--gse-ui-charts-bubbleChart-bubbleOutline-category9-default:#54c6ab;--gse-ui-charts-bubbleChart-bubbleOutline-category9-reduced:#54c6ab40;--gse-ui-charts-columnChart-column-category1-default:#53bee5;--gse-ui-charts-columnChart-column-category1-reduced:#53bee540;--gse-ui-charts-columnChart-column-category2-default:#467aae;--gse-ui-charts-columnChart-column-category2-reduced:#467aae40;--gse-ui-charts-columnChart-column-category3-default:#ac75ff;--gse-ui-charts-columnChart-column-category3-reduced:#ac75ff40;--gse-ui-charts-donutChart-segment-category1-default:#53bee5;--gse-ui-charts-donutChart-segment-category1-reduced:#53bee540;--gse-ui-charts-donutChart-segment-category10-default:#3d538f;--gse-ui-charts-donutChart-segment-category10-reduced:#3d538f40;--gse-ui-charts-donutChart-segment-category2-default:#467aae;--gse-ui-charts-donutChart-segment-category2-reduced:#467aae40;--gse-ui-charts-donutChart-segment-category3-default:#ac75ff;--gse-ui-charts-donutChart-segment-category3-reduced:#ac75ff40;--gse-ui-charts-donutChart-segment-category4-default:#e55ecd;--gse-ui-charts-donutChart-segment-category4-reduced:#e55ecd40;--gse-ui-charts-donutChart-segment-category5-default:#ff5c77;--gse-ui-charts-donutChart-segment-category5-reduced:#ff5c7740;--gse-ui-charts-donutChart-segment-category6-default:#cc3715;--gse-ui-charts-donutChart-segment-category6-reduced:#cc371540;--gse-ui-charts-donutChart-segment-category7-default:#ffc650;--gse-ui-charts-donutChart-segment-category7-reduced:#ffc65040;--gse-ui-charts-donutChart-segment-category8-default:#a0c654;--gse-ui-charts-donutChart-segment-category8-reduced:#a0c65440;--gse-ui-charts-donutChart-segment-category9-default:#54c6ab;--gse-ui-charts-donutChart-segment-category9-reduced:#54c6ab40;--gse-ui-charts-donutChart-segment-stoke-default:#1e1e21;--gse-ui-charts-donutChart-segment-chartMessage-default:#3e4044;--gse-ui-charts-gaugeChart-segment-default:#53bee5;--gse-ui-charts-gaugeChart-segment-track:#3e4044;--gse-ui-charts-gaugeChart-segment-chartMessage:#3e4044;--gse-ui-charts-gaugeChart-indicator-positive:#09b581;--gse-ui-charts-gaugeChart-indicator-negative:#e84e6a;--gse-ui-charts-heatmap-numericalTile-level1-default:#e6f4fa;--gse-ui-charts-heatmap-numericalTile-level1-reduced:#e6f4fa40;--gse-ui-charts-heatmap-numericalTile-level10-default:#003447;--gse-ui-charts-heatmap-numericalTile-level10-reduced:#00344740;--gse-ui-charts-heatmap-numericalTile-level2-default:#cdeaf5;--gse-ui-charts-heatmap-numericalTile-level2-reduced:#cdeaf540;--gse-ui-charts-heatmap-numericalTile-level3-default:#9fd6ea;--gse-ui-charts-heatmap-numericalTile-level3-reduced:#9fd6ea40;--gse-ui-charts-heatmap-numericalTile-level4-default:#81cbe5;--gse-ui-charts-heatmap-numericalTile-level4-reduced:#81cbe540;--gse-ui-charts-heatmap-numericalTile-level5-default:#53bee5;--gse-ui-charts-heatmap-numericalTile-level5-reduced:#53bee540;--gse-ui-charts-heatmap-numericalTile-level6-default:#28afe0;--gse-ui-charts-heatmap-numericalTile-level6-reduced:#28afe040;--gse-ui-charts-heatmap-numericalTile-level7-default:#1589b2;--gse-ui-charts-heatmap-numericalTile-level7-reduced:#1589b240;--gse-ui-charts-heatmap-numericalTile-level8-default:#056385;--gse-ui-charts-heatmap-numericalTile-level8-reduced:#05638540;--gse-ui-charts-heatmap-numericalTile-level9-default:#04445c;--gse-ui-charts-heatmap-numericalTile-level9-reduced:#04445c40;--gse-ui-charts-heatmap-categoricalTile-green-default:#53bee5;--gse-ui-charts-heatmap-categoricalTile-green-reduced:#53bee540;--gse-ui-charts-heatmap-categoricalTile-red-default:#ff7d92;--gse-ui-charts-heatmap-categoricalTile-red-reduced:#ff7d9240;--gse-ui-charts-heatmap-categoricalTile-yellow-default:#ffd173;--gse-ui-charts-heatmap-categoricalTile-yellow-reduced:#ffd17340;--gse-ui-charts-heatmap-tileLabel-default:#2a2a2e;--gse-ui-charts-heatmap-tileLabel-inverse:#ffffff;--gse-ui-charts-heatmap-chartMessage-background-default:#3e4044;--gse-ui-charts-heatmap-legend-categorical-green:#53bee5;--gse-ui-charts-heatmap-legend-categorical-red:#ff7d92;--gse-ui-charts-heatmap-legend-categorical-yellow:#ffd173;--gse-ui-charts-heatmap-legend-gradient-spacingBottom:4px;--gse-ui-charts-heatmap-legend-label-fontFamily:\"Noto Sans\";--gse-ui-charts-heatmap-legend-label-fontWeight:400;--gse-ui-charts-heatmap-legend-label-fontSize:12px;--gse-ui-charts-heatmap-legend-label-lineHeight:18px;--gse-ui-charts-heatmap-tile-label-fontFamily:\"Noto Sans\";--gse-ui-charts-heatmap-tile-label-fontWeight:400;--gse-ui-charts-heatmap-tile-label-fontSize:12px;--gse-ui-charts-heatmap-tile-label-lineHeight:18px;--gse-ui-charts-lineChart-line-category1-default:#53bee5;--gse-ui-charts-lineChart-line-category1-reduced:#53bee540;--gse-ui-charts-lineChart-line-category10-default:#3d538f;--gse-ui-charts-lineChart-line-category10-reduced:#3d538f40;--gse-ui-charts-lineChart-line-category2-default:#467aae;--gse-ui-charts-lineChart-line-category2-reduced:#467aae40;--gse-ui-charts-lineChart-line-category3-default:#ac75ff;--gse-ui-charts-lineChart-line-category3-reduced:#ac75ff40;--gse-ui-charts-lineChart-line-category4-default:#e55ecd;--gse-ui-charts-lineChart-line-category4-reduced:#e55ecd40;--gse-ui-charts-lineChart-line-category5-default:#ff5c77;--gse-ui-charts-lineChart-line-category5-reduced:#ff5c7740;--gse-ui-charts-lineChart-line-category6-default:#cc3715;--gse-ui-charts-lineChart-line-category6-reduced:#cc371540;--gse-ui-charts-lineChart-line-category7-default:#ffc650;--gse-ui-charts-lineChart-line-category7-reduced:#ffc65040;--gse-ui-charts-lineChart-line-category8-default:#a0c654;--gse-ui-charts-lineChart-line-category8-reduced:#a0c65440;--gse-ui-charts-lineChart-line-category9-default:#54c6ab;--gse-ui-charts-lineChart-line-category9-reduced:#54c6ab40;--gse-ui-charts-lineChart-point-pointFill-default:#1e1e21;--gse-ui-charts-lineChart-point-pointFill-category1:#53bee5;--gse-ui-charts-lineChart-point-pointFill-category10:#3d538f;--gse-ui-charts-lineChart-point-pointFill-category2:#467aae;--gse-ui-charts-lineChart-point-pointFill-category3:#ac75ff;--gse-ui-charts-lineChart-point-pointFill-category4:#e55ecd;--gse-ui-charts-lineChart-point-pointFill-category5:#ff5c77;--gse-ui-charts-lineChart-point-pointFill-category6:#cc3715;--gse-ui-charts-lineChart-point-pointFill-category7:#ffc650;--gse-ui-charts-lineChart-point-pointFill-category8:#a0c654;--gse-ui-charts-lineChart-point-pointFill-category9:#54c6ab;--gse-ui-charts-lineChart-point-pointOutline-category1:#53bee5;--gse-ui-charts-lineChart-point-pointOutline-category10:#3d538f;--gse-ui-charts-lineChart-point-pointOutline-category2:#467aae;--gse-ui-charts-lineChart-point-pointOutline-category3:#ac75ff;--gse-ui-charts-lineChart-point-pointOutline-category4:#e55ecd;--gse-ui-charts-lineChart-point-pointOutline-category5:#ff5c77;--gse-ui-charts-lineChart-point-pointOutline-category6:#cc3715;--gse-ui-charts-lineChart-point-pointOutline-category7:#ffc650;--gse-ui-charts-lineChart-point-pointOutline-category8:#a0c654;--gse-ui-charts-lineChart-point-pointOutline-category9:#54c6ab;--gse-ui-charts-pieChart-segment-category1-default:#53bee5;--gse-ui-charts-pieChart-segment-category1-reduced:#53bee540;--gse-ui-charts-pieChart-segment-category10-default:#3d538f;--gse-ui-charts-pieChart-segment-category10-reduced:#3d538f40;--gse-ui-charts-pieChart-segment-category2-default:#467aae;--gse-ui-charts-pieChart-segment-category2-reduced:#467aae40;--gse-ui-charts-pieChart-segment-category3-default:#ac75ff;--gse-ui-charts-pieChart-segment-category3-reduced:#ac75ff40;--gse-ui-charts-pieChart-segment-category4-default:#e55ecd;--gse-ui-charts-pieChart-segment-category4-reduced:#e55ecd40;--gse-ui-charts-pieChart-segment-category5-default:#ff5c77;--gse-ui-charts-pieChart-segment-category5-reduced:#ff5c7740;--gse-ui-charts-pieChart-segment-category6-default:#cc3715;--gse-ui-charts-pieChart-segment-category6-reduced:#cc371540;--gse-ui-charts-pieChart-segment-category7-default:#ffc650;--gse-ui-charts-pieChart-segment-category7-reduced:#ffc65040;--gse-ui-charts-pieChart-segment-category8-default:#a0c654;--gse-ui-charts-pieChart-segment-category8-reduced:#a0c65440;--gse-ui-charts-pieChart-segment-category9-default:#54c6ab;--gse-ui-charts-pieChart-segment-category9-reduced:#54c6ab40;--gse-ui-charts-pieChart-segment-chartMessage-default:#3e4044;--gse-ui-charts-pieChart-segment-stroke-default:#1e1e21;--gse-ui-charts-sankeyAlluvial-link-category1-default:#53bee580;--gse-ui-charts-sankeyAlluvial-link-category1-reduced:#53bee51a;--gse-ui-charts-sankeyAlluvial-link-category10-default:#3d538f80;--gse-ui-charts-sankeyAlluvial-link-category10-reduced:#3d538f1a;--gse-ui-charts-sankeyAlluvial-link-category2-default:#467aae80;--gse-ui-charts-sankeyAlluvial-link-category2-reduced:#467aae1a;--gse-ui-charts-sankeyAlluvial-link-category3-default:#ac75ff80;--gse-ui-charts-sankeyAlluvial-link-category3-reduced:#ac75ff1a;--gse-ui-charts-sankeyAlluvial-link-category4-default:#e55ecd80;--gse-ui-charts-sankeyAlluvial-link-category4-reduced:#e55ecd1a;--gse-ui-charts-sankeyAlluvial-link-category5-default:#ff5c7780;--gse-ui-charts-sankeyAlluvial-link-category5-reduced:#ff5c771a;--gse-ui-charts-sankeyAlluvial-link-category6-default:#cc371580;--gse-ui-charts-sankeyAlluvial-link-category6-reduced:#cc37151a;--gse-ui-charts-sankeyAlluvial-link-category7-default:#ffc65080;--gse-ui-charts-sankeyAlluvial-link-category7-reduced:#ffc6501a;--gse-ui-charts-sankeyAlluvial-link-category8-default:#a0c65480;--gse-ui-charts-sankeyAlluvial-link-category8-reduced:#a0c6541a;--gse-ui-charts-sankeyAlluvial-link-category9-default:#54c6ab80;--gse-ui-charts-sankeyAlluvial-link-category9-reduced:#54c6ab1a;--gse-ui-charts-sankeyAlluvial-link-subtle-default:#84889180;--gse-ui-charts-sankeyAlluvial-link-subtle-reduced:#8488911a;--gse-ui-charts-sankeyAlluvial-leftNode-spacingLeft:8px;--gse-ui-charts-sankeyAlluvial-node-category1-default:#53bee5;--gse-ui-charts-sankeyAlluvial-node-category1-reduced:#53bee540;--gse-ui-charts-sankeyAlluvial-node-category10-default:#3d538f;--gse-ui-charts-sankeyAlluvial-node-category10-reduced:#3d538f40;--gse-ui-charts-sankeyAlluvial-node-category2-default:#467aae;--gse-ui-charts-sankeyAlluvial-node-category2-reduced:#467aae40;--gse-ui-charts-sankeyAlluvial-node-category3-default:#ac75ff;--gse-ui-charts-sankeyAlluvial-node-category3-reduced:#ac75ff40;--gse-ui-charts-sankeyAlluvial-node-category4-default:#e55ecd;--gse-ui-charts-sankeyAlluvial-node-category4-reduced:#e55ecd40;--gse-ui-charts-sankeyAlluvial-node-category5-default:#ff5c77;--gse-ui-charts-sankeyAlluvial-node-category5-reduced:#ff5c7740;--gse-ui-charts-sankeyAlluvial-node-category6-default:#cc3715;--gse-ui-charts-sankeyAlluvial-node-category6-reduced:#cc371540;--gse-ui-charts-sankeyAlluvial-node-category7-default:#ffc650;--gse-ui-charts-sankeyAlluvial-node-category7-reduced:#ffc65040;--gse-ui-charts-sankeyAlluvial-node-category8-default:#a0c654;--gse-ui-charts-sankeyAlluvial-node-category8-reduced:#a0c65440;--gse-ui-charts-sankeyAlluvial-node-category9-default:#54c6ab;--gse-ui-charts-sankeyAlluvial-node-category9-reduced:#54c6ab40;--gse-ui-charts-sankeyAlluvial-node-spaceBetween:4px;--gse-ui-charts-sankeyAlluvial-node-label-fontFamily:\"Noto Sans\";--gse-ui-charts-sankeyAlluvial-node-label-fontWeight:400;--gse-ui-charts-sankeyAlluvial-node-label-fontSize:12px;--gse-ui-charts-sankeyAlluvial-node-label-lineHeight:18px;--gse-ui-charts-sankeyAlluvial-nodeLabel:#ffffff;--gse-ui-charts-sankeyAlluvial-rightNode-spacingRight:8px;--gse-ui-charts-scatterChart-dotFill-default:#1e1e21;--gse-ui-charts-scatterChart-dotFill-category1-hover:#53bee5;--gse-ui-charts-scatterChart-dotFill-category10-hover:#3d538f;--gse-ui-charts-scatterChart-dotFill-category2-hover:#467aae;--gse-ui-charts-scatterChart-dotFill-category3-hover:#ac75ff;--gse-ui-charts-scatterChart-dotFill-category4-hover:#e55ecd;--gse-ui-charts-scatterChart-dotFill-category5-hover:#ff5c77;--gse-ui-charts-scatterChart-dotFill-category6-hover:#cc3715;--gse-ui-charts-scatterChart-dotFill-category7-hover:#ffc650;--gse-ui-charts-scatterChart-dotFill-category8-hover:#a0c654;--gse-ui-charts-scatterChart-dotFill-category9-hover:#54c6ab;--gse-ui-charts-scatterChart-dotOutline-category1-default:#53bee5;--gse-ui-charts-scatterChart-dotOutline-category1-reduced:#53bee540;--gse-ui-charts-scatterChart-dotOutline-category10-default:#3d538f;--gse-ui-charts-scatterChart-dotOutline-category10-reduced:#3d538f40;--gse-ui-charts-scatterChart-dotOutline-category2-default:#467aae;--gse-ui-charts-scatterChart-dotOutline-category2-reduced:#467aae40;--gse-ui-charts-scatterChart-dotOutline-category3-default:#ac75ff;--gse-ui-charts-scatterChart-dotOutline-category3-reduced:#ac75ff40;--gse-ui-charts-scatterChart-dotOutline-category4-default:#e55ecd;--gse-ui-charts-scatterChart-dotOutline-category4-reduced:#e55ecd40;--gse-ui-charts-scatterChart-dotOutline-category5-default:#ff5c77;--gse-ui-charts-scatterChart-dotOutline-category5-reduced:#ff5c7740;--gse-ui-charts-scatterChart-dotOutline-category6-default:#cc3715;--gse-ui-charts-scatterChart-dotOutline-category6-reduced:#cc371540;--gse-ui-charts-scatterChart-dotOutline-category7-default:#ffc650;--gse-ui-charts-scatterChart-dotOutline-category7-reduced:#ffc65040;--gse-ui-charts-scatterChart-dotOutline-category8-default:#a0c654;--gse-ui-charts-scatterChart-dotOutline-category8-reduced:#a0c65440;--gse-ui-charts-scatterChart-dotOutline-category9-default:#54c6ab;--gse-ui-charts-scatterChart-dotOutline-category9-reduced:#54c6ab40;--gse-ui-charts-sparkline-mono-default:#5476d5;--gse-ui-charts-sparkline-mono-reduced:#5476d566;--gse-ui-charts-sparkline-positive-reduced:#09b58166;--gse-ui-charts-sparkline-positive-default:#09b581;--gse-ui-charts-sparkline-negative-reduced:#e84e6a66;--gse-ui-charts-sparkline-negative-default:#e84e6a;--gse-ui-charts-sparkline-neutral-reduced:#808db266;--gse-ui-charts-sparkline-neutral-default:#808db2;--gse-ui-charts-sparkline-trendline-default:#6a6d75;--gse-ui-charts-chartsShared-centerTitle-subtitle-default:#ffffff;--gse-ui-charts-chartsShared-centerTitle-title-default:#ffffff;--gse-ui-charts-chartsShared-chartHeader-subtitle-default:#ffffff;--gse-ui-charts-chartsShared-chartHeader-title-default:#ffffff;--gse-ui-charts-chartsShared-chartHeader-spacingBottom:24px;--gse-ui-charts-chartsShared-chartMessages-message-default:#ffffff;--gse-ui-charts-chartsShared-chartMessages-empty-icon-default:#f8c73e;--gse-ui-charts-chartsShared-chartMessages-error-icon-default:#e84e6a;--gse-ui-charts-chartsShared-chartMessages-loading-icon-default:#5476d5;--gse-ui-charts-chartsShared-chartMessages-loading-icon-track:#465066;--gse-ui-charts-chartsShared-chartMessages-icon-spacingBottom:4px;--gse-ui-charts-chartsShared-legend-dot-category1:#53bee5;--gse-ui-charts-chartsShared-legend-dot-category10:#3d538f;--gse-ui-charts-chartsShared-legend-dot-category2:#467aae;--gse-ui-charts-chartsShared-legend-dot-category3:#ac75ff;--gse-ui-charts-chartsShared-legend-dot-category4:#e55ecd;--gse-ui-charts-chartsShared-legend-dot-category5:#ff5c77;--gse-ui-charts-chartsShared-legend-dot-category6:#cc3715;--gse-ui-charts-chartsShared-legend-dot-category7:#ffc650;--gse-ui-charts-chartsShared-legend-dot-category8:#a0c654;--gse-ui-charts-chartsShared-legend-dot-category9:#54c6ab;--gse-ui-charts-chartsShared-legend-dot-placeholder:#c1c6d4;--gse-ui-charts-chartsShared-legend-dot-spacingRight:4px;--gse-ui-charts-chartsShared-legend-label-default:#c1c6d4;--gse-ui-charts-chartsShared-legend-horizontal-seriesItem-spacingRight:16px;--gse-ui-charts-chartsShared-legend-vertical-seriesItem-spacingBottom:16px;--gse-ui-charts-chartsShared-legend-spacingLeft:24px;--gse-ui-charts-chartsShared-legend-spacingTop:24px;--gse-ui-charts-chartsShared-axis-x-spacingBottom:4px;--gse-ui-charts-chartsShared-axis-y-spacingLeft:8px;--gse-ui-charts-chartsShared-axis-default:#a3a8b5;--gse-ui-charts-chartsShared-gridLine-horizontal-last-spacingTop:24px;--gse-ui-charts-chartsShared-gridLine-vertical-first-spacingLeft:24px;--gse-ui-charts-chartsShared-gridLine-vertical-last-spacingRight:24px;--gse-ui-charts-chartsShared-gridLine-default:#3e4044;--gse-ui-charts-chartsShared-gridLine-hover:#848891;--gse-ui-charts-chartsShared-label-x-spacingBottom:4px;--gse-ui-charts-chartsShared-label-y-spacingLeft:8px;--gse-ui-charts-chartsShared-label-default:#ffffff;--gse-ui-charts-chartsShared-axisTitle-default:#ffffff;--gse-ui-charts-chartsShared-focus-default:#5476d5;--gse-ui-charts-chartsShared-targetLine-default:#ff8f76;--gse-ui-charts-chartsShared-anatomy-axisTitle-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-anatomy-axisTitle-fontWeight:700;--gse-ui-charts-chartsShared-anatomy-axisTitle-fontSize:12px;--gse-ui-charts-chartsShared-anatomy-axisTitle-lineHeight:18px;--gse-ui-charts-chartsShared-anatomy-label-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-anatomy-label-fontWeight:400;--gse-ui-charts-chartsShared-anatomy-label-fontSize:12px;--gse-ui-charts-chartsShared-anatomy-label-lineHeight:18px;--gse-ui-charts-chartsShared-header-chartTitle-fontFamily:Urbanist;--gse-ui-charts-chartsShared-header-chartTitle-fontWeight:700;--gse-ui-charts-chartsShared-header-chartTitle-fontSize:18px;--gse-ui-charts-chartsShared-header-chartTitle-lineHeight:27px;--gse-ui-charts-chartsShared-header-chartSubtitle-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-header-chartSubtitle-fontWeight:400;--gse-ui-charts-chartsShared-header-chartSubtitle-fontSize:14px;--gse-ui-charts-chartsShared-header-chartSubtitle-lineHeight:20px;--gse-ui-charts-chartsShared-legend-label-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-legend-label-fontWeight:400;--gse-ui-charts-chartsShared-legend-label-fontSize:12px;--gse-ui-charts-chartsShared-legend-label-lineHeight:18px;--gse-ui-charts-chartsShared-messages-message-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-messages-message-fontWeight:400;--gse-ui-charts-chartsShared-messages-message-fontSize:12px;--gse-ui-charts-chartsShared-messages-message-lineHeight:18px;--gse-ui-charts-chartsShared-centerTitle-title-md-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-md-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-md-fontSize:36px;--gse-ui-charts-chartsShared-centerTitle-title-md-lineHeight:44px;--gse-ui-charts-chartsShared-centerTitle-title-xs-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-xs-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-xs-fontSize:18px;--gse-ui-charts-chartsShared-centerTitle-title-xs-lineHeight:27px;--gse-ui-charts-chartsShared-centerTitle-title-sm-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-sm-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-sm-fontSize:24px;--gse-ui-charts-chartsShared-centerTitle-title-sm-lineHeight:32px;--gse-ui-charts-chartsShared-centerTitle-title-lg-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-lg-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-lg-fontSize:48px;--gse-ui-charts-chartsShared-centerTitle-title-lg-lineHeight:58px;--gse-ui-charts-chartsShared-centerTitle-title-xl-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-xl-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-xl-fontSize:60px;--gse-ui-charts-chartsShared-centerTitle-title-xl-lineHeight:72px;--gse-ui-charts-chartsShared-centerTitle-title-2xl-fontFamily:Urbanist;--gse-ui-charts-chartsShared-centerTitle-title-2xl-fontWeight:700;--gse-ui-charts-chartsShared-centerTitle-title-2xl-fontSize:72px;--gse-ui-charts-chartsShared-centerTitle-title-2xl-lineHeight:86px;--gse-ui-charts-chartsShared-centerTitle-subtitle-md-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-md-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-md-fontSize:14px;--gse-ui-charts-chartsShared-centerTitle-subtitle-md-lineHeight:20px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-fontSize:10px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xs-lineHeight:14px;--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-fontSize:12px;--gse-ui-charts-chartsShared-centerTitle-subtitle-sm-lineHeight:18px;--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-fontSize:16px;--gse-ui-charts-chartsShared-centerTitle-subtitle-lg-lineHeight:24px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-fontSize:18px;--gse-ui-charts-chartsShared-centerTitle-subtitle-xl-lineHeight:24px;--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-fontFamily:\"Noto Sans\";--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-fontWeight:400;--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-fontSize:24px;--gse-ui-charts-chartsShared-centerTitle-subtitle-2xl-lineHeight:32px}button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}input:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-focus-ring-focused:focus{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-focus-ring-focused-within:focus-within{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-focus-ring-focused-visible:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-focus-ring-small-focused:focus{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus)}.gux-focus-ring-small-focused-within:focus-within{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus)}.gux-focus-ring-small-focused-visible:focus-visible{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus)}.gux-focus-ring{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-focus-ring-small{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus)}h1{font-family:var(--gse-semantic-heading-xl-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-xl-bold-fontSize);line-height:var(--gse-semantic-heading-xl-bold-lineHeight);font-weight:var(--gse-semantic-heading-xl-bold-fontWeight)}h2{font-family:var(--gse-semantic-heading-lg-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-lg-bold-fontSize);line-height:var(--gse-semantic-heading-lg-bold-lineHeight);font-weight:var(--gse-semantic-heading-lg-bold-fontWeight)}h3{font-family:var(--gse-semantic-heading-md-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-md-bold-fontSize);line-height:var(--gse-semantic-heading-md-bold-lineHeight);font-weight:var(--gse-semantic-heading-md-bold-fontWeight)}h4,h5,h6{font-family:var(--gse-semantic-heading-sm-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-sm-bold-fontSize);line-height:var(--gse-semantic-heading-sm-bold-lineHeight);font-weight:var(--gse-semantic-heading-sm-bold-fontWeight)}.gux-heading-xl,.gux-heading-xl-bold{font-family:var(--gse-semantic-heading-xl-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-xl-bold-fontSize);line-height:var(--gse-semantic-heading-xl-bold-lineHeight);font-weight:var(--gse-semantic-heading-xl-bold-fontWeight)}.gux-heading-xl-semibold{font-family:var(--gse-semantic-heading-xl-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-xl-bold-fontSize);line-height:var(--gse-semantic-heading-xl-bold-lineHeight);font-weight:var(--gse-semantic-heading-lg-semiBold-fontWeight)}.gux-heading-lg,.gux-heading-lg-bold{font-family:var(--gse-semantic-heading-lg-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-lg-bold-fontSize);line-height:var(--gse-semantic-heading-lg-bold-lineHeight);font-weight:var(--gse-semantic-heading-lg-bold-fontWeight)}.gux-heading-lg-semibold{font-family:var(--gse-semantic-heading-lg-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-lg-bold-fontSize);line-height:var(--gse-semantic-heading-lg-bold-lineHeight);font-weight:var(--gse-semantic-heading-lg-semiBold-fontWeight)}.gux-heading-md,.gux-heading-md-bold{font-family:var(--gse-semantic-heading-md-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-md-bold-fontSize);line-height:var(--gse-semantic-heading-md-bold-lineHeight);font-weight:var(--gse-semantic-heading-md-bold-fontWeight)}.gux-heading-md-semibold{font-family:var(--gse-semantic-heading-md-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-md-bold-fontSize);line-height:var(--gse-semantic-heading-md-bold-lineHeight);font-weight:var(--gse-semantic-heading-md-semiBold-fontWeight)}.gux-heading-sm,.gux-heading-sm-bold{font-family:var(--gse-semantic-heading-sm-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-sm-bold-fontSize);line-height:var(--gse-semantic-heading-sm-bold-lineHeight);font-weight:var(--gse-semantic-heading-sm-bold-fontWeight)}.gux-heading-sm-semibold{font-family:var(--gse-semantic-heading-sm-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-sm-bold-fontSize);line-height:var(--gse-semantic-heading-sm-bold-lineHeight);font-weight:var(--gse-semantic-heading-sm-semiBold-fontWeight)}.gux-heading-xs,.gux-heading-xs-bold{font-family:var(--gse-semantic-heading-xs-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-xs-bold-fontSize);line-height:var(--gse-semantic-heading-xs-bold-lineHeight);font-weight:var(--gse-semantic-heading-xs-bold-fontWeight)}.gux-heading-xs-semibold{font-family:var(--gse-semantic-heading-xs-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-xs-bold-fontSize);line-height:var(--gse-semantic-heading-xs-bold-lineHeight);font-weight:var(--gse-semantic-heading-xs-semiBold-fontWeight)}.gux-heading-subheading-regular{font-family:var(--gse-semantic-subheading-regular-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-subheading-regular-fontSize);line-height:var(--gse-semantic-subheading-regular-lineHeight);font-weight:var(--gse-semantic-subheading-regular-fontWeight)}.gux-heading-subheading,.gux-heading-subheading-bold{font-family:var(--gse-semantic-subheading-regular-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-subheading-regular-fontSize);line-height:var(--gse-semantic-subheading-regular-lineHeight);font-weight:var(--gse-semantic-subheading-bold-fontWeight)}.gux-heading-subheading-semibold{font-family:var(--gse-semantic-subheading-regular-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-subheading-regular-fontSize);line-height:var(--gse-semantic-subheading-regular-lineHeight);font-weight:var(--gse-semantic-subheading-semiBold-fontWeight)}.gux-heading-overline{font-family:var(--gse-semantic-heading-overline-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-overline-fontSize);line-height:var(--gse-semantic-heading-overline-lineHeight);text-transform:var(--gse-semantic-heading-overline-textCase);letter-spacing:var(--gse-semantic-heading-overline-letterSpacing);font-weight:var(--gse-semantic-heading-overline-fontWeight)}body{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-regular-fontWeight)}.gux-body-lg-regular{font-family:var(--gse-semantic-body-lg-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-lg-regular-fontSize);line-height:var(--gse-semantic-body-lg-regular-lineHeight);font-weight:var(--gse-semantic-body-lg-regular-fontWeight)}.gux-body-lg-semibold{font-family:var(--gse-semantic-body-lg-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-lg-regular-fontSize);line-height:var(--gse-semantic-body-lg-regular-lineHeight);font-weight:var(--gse-semantic-body-lg-semiBold-fontWeight)}.gux-body-lg-bold{font-family:var(--gse-semantic-body-lg-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-lg-regular-fontSize);line-height:var(--gse-semantic-body-lg-regular-lineHeight);font-weight:var(--gse-semantic-body-lg-bold-fontWeight)}.gux-body-md-regular{font-family:var(--gse-semantic-body-md-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-md-regular-fontSize);line-height:var(--gse-semantic-body-md-regular-lineHeight);font-weight:var(--gse-semantic-body-md-regular-fontWeight)}.gux-body-md-semibold{font-family:var(--gse-semantic-body-md-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-md-regular-fontSize);line-height:var(--gse-semantic-body-md-regular-lineHeight);font-weight:var(--gse-semantic-body-md-semiBold-fontWeight)}.gux-body-md-bold{font-family:var(--gse-semantic-body-md-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-md-regular-fontSize);line-height:var(--gse-semantic-body-md-regular-lineHeight);font-weight:var(--gse-semantic-body-md-bold-fontWeight)}.gux-body-sm-regular{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-regular-fontWeight)}.gux-body-sm-semibold{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-semiBold-fontWeight)}.gux-body-sm-bold{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-bold-fontWeight)}.gux-ui-button{font-family:var(--gse-semantic-body-md-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-md-regular-fontSize);font-weight:var(--gse-core-fontWeight-semiBold);line-height:var(--gse-semantic-body-md-regular-lineHeight)}.gux-ui-link{font-family:var(--gse-semantic-body-md-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-md-regular-fontSize);font-weight:var(--gse-core-fontWeight-regular);line-height:var(--gse-semantic-body-md-regular-lineHeight)}.gux-ui-label{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);font-weight:var(--gse-core-fontWeight-bold);line-height:var(--gse-semantic-body-sm-regular-lineHeight)}.gux-ui-placeholder{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);font-weight:var(--gse-core-fontWeight-regular);line-height:var(--gse-semantic-body-sm-regular-lineHeight)}a{color:var(--gse-ui-links-default-foregroundColor);text-decoration:underline;border-radius:0}a:hover{color:var(--gse-ui-links-hover-foregroundColor)}a:active{color:var(--gse-ui-links-active-foregroundColor)}a:visited{color:var(--gse-ui-links-visited-foregroundColor)}a:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}table a{color:var(--gse-ui-links-default-foregroundColor);text-decoration:underline;border-radius:0}table a:hover{color:var(--gse-ui-links-hover-foregroundColor)}table a:active{color:var(--gse-ui-links-active-foregroundColor)}table a:visited{color:var(--gse-ui-links-visited-foregroundColor)}table a:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}table a{text-decoration:none}.gux-ui-anchor{color:var(--gse-ui-links-default-foregroundColor);text-decoration:underline;border-radius:0}.gux-ui-anchor:hover{color:var(--gse-ui-links-hover-foregroundColor)}.gux-ui-anchor:active{color:var(--gse-ui-links-active-foregroundColor)}.gux-ui-anchor:visited{color:var(--gse-ui-links-visited-foregroundColor)}.gux-ui-anchor:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-anchor-table{color:var(--gse-ui-links-default-foregroundColor);text-decoration:underline;border-radius:0}.gux-anchor-table:hover{color:var(--gse-ui-links-hover-foregroundColor)}.gux-anchor-table:active{color:var(--gse-ui-links-active-foregroundColor)}.gux-anchor-table:visited{color:var(--gse-ui-links-visited-foregroundColor)}.gux-anchor-table:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-anchor-table{text-decoration:none}.gux-icon-anchor .gux-icon{padding-right:var(--gse-ui-links-inLine-padding)}gux-calendar-beta input[type=date]{display:none;-webkit-appearance:none}gux-avatar-focusable-beta{display:inline-block}gux-avatar-focusable-beta a{display:inline-block;line-height:0px;border-radius:50%}gux-avatar-focusable-beta button{padding:0;margin:0;line-height:0px;cursor:pointer;background:none;border:none;border-radius:50%}gux-action-toast-legacy dl dt{flex:0 1 20%;align-self:auto;order:0;margin:0;color:var(--gse-ui-toast-success-foregroundColor);font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-bold-fontWeight)}gux-action-toast-legacy dl dd{flex:0 1 80%;align-self:auto;order:0;margin:0}gux-action-button [slot=title]{display:flex;align-items:center;justify-content:center}gux-action-button [slot=title] gux-icon{inline-size:var(--gse-ui-button-icon-size);block-size:var(--gse-ui-button-icon-size);padding-inline-end:var(--gse-ui-button-gap)}gux-button-multi [slot=title]{display:inline-flex;align-items:center}gux-button-multi [slot=title] gux-icon{inline-size:var(--gse-ui-button-icon-size);block-size:var(--gse-ui-button-icon-size);padding-inline-end:var(--gse-ui-button-gap)}gux-content-search input:focus-visible{outline:none;border:0}gux-form-field-checkbox input[type=checkbox]::before{grid-area:1/1;content:\"\";border-radius:15%}gux-form-field-checkbox input[type=checkbox]:focus-visible{outline:var(--gse-ui-checkbox-focus-border-width) var(--gse-ui-checkbox-focus-border-style) var(--gse-ui-checkbox-focus-border-color);outline-offset:var(--gse-ui-checkbox-focus-offset);border-radius:var(--gse-ui-checkbox-focus-borderRadiusSmall)}gux-form-field-checkbox input[type=checkbox]:not(:checked)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M13.7143 0C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143ZM13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M13.7143 0C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143ZM13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-default-unselectedForegroundColor)}gux-form-field-checkbox input[type=checkbox]:not(:checked):not(:disabled):not(:indeterminate):hover::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M13.7143 0C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143ZM13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M13.7143 0C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143ZM13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-hover-foregroundColor)}gux-form-field-checkbox input[type=checkbox]:checked:not(:disabled):hover::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-hover-foregroundColor)}gux-form-field-checkbox input[type=checkbox]:checked::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-default-selectedForegroundColor)}gux-form-field-checkbox input[type=checkbox]:indeterminate::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M11.1429 7.14286C11.6179 7.14286 12 7.525 12 8C12 8.475 11.6179 8.85714 11.1429 8.85714H4.85714C4.38214 8.85714 4 8.475 4 8C4 7.525 4.38214 7.14286 4.85714 7.14286H11.1429ZM0 2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571ZM1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571Z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M11.1429 7.14286C11.6179 7.14286 12 7.525 12 8C12 8.475 11.6179 8.85714 11.1429 8.85714H4.85714C4.38214 8.85714 4 8.475 4 8C4 7.525 4.38214 7.14286 4.85714 7.14286H11.1429ZM0 2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571ZM1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571Z'/%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-default-selectedForegroundColor)}gux-form-field-checkbox input[type=checkbox]:not(:disabled):indeterminate:hover{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M11.1429 7.14286C11.6179 7.14286 12 7.525 12 8C12 8.475 11.6179 8.85714 11.1429 8.85714H4.85714C4.38214 8.85714 4 8.475 4 8C4 7.525 4.38214 7.14286 4.85714 7.14286H11.1429ZM0 2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571ZM1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M11.1429 7.14286C11.6179 7.14286 12 7.525 12 8C12 8.475 11.6179 8.85714 11.1429 8.85714H4.85714C4.38214 8.85714 4 8.475 4 8C4 7.525 4.38214 7.14286 4.85714 7.14286H11.1429ZM0 2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571ZM1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-hover-foregroundColor)}gux-form-field-checkbox input[type=checkbox]:disabled::before{cursor:not-allowed;opacity:var(--gse-ui-checkbox-disabled-opacity)}gux-form-field-checkbox.gux-input-error input[type=checkbox]:not(:checked)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M13.7143 0C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143ZM13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M13.7143 0C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143ZM13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-error-foregroundColor)}gux-form-field-checkbox.gux-input-error input[type=checkbox]:checked::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-error-foregroundColor)}gux-form-field-checkbox.gux-input-error input[type=checkbox]:indeterminate::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M11.1429 7.14286C11.6179 7.14286 12 7.525 12 8C12 8.475 11.6179 8.85714 11.1429 8.85714H4.85714C4.38214 8.85714 4 8.475 4 8C4 7.525 4.38214 7.14286 4.85714 7.14286H11.1429ZM0 2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571ZM1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' %3E%3Cpath d='M11.1429 7.14286C11.6179 7.14286 12 7.525 12 8C12 8.475 11.6179 8.85714 11.1429 8.85714H4.85714C4.38214 8.85714 4 8.475 4 8C4 7.525 4.38214 7.14286 4.85714 7.14286H11.1429ZM0 2.28571C0 1.02321 1.02321 0 2.28571 0H13.7143C14.975 0 16 1.02321 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.02321 16 0 14.975 0 13.7143V2.28571ZM1.71429 2.28571V13.7143C1.71429 14.0286 1.97 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97 14.0286 1.71429 13.7143 1.71429H2.28571C1.97 1.71429 1.71429 1.97 1.71429 2.28571Z' /%3E%3C/svg%3E\");background:var(--gse-ui-checkbox-icon-error-foregroundColor)}gux-form-field-number input{}gux-form-field-number input::-webkit-outer-spin-button,gux-form-field-number input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}gux-form-field-number input[type=number]{-moz-appearance:textfield}gux-form-field-number input:focus-visible{outline:none}gux-form-field-radio input[type=radio]::before{grid-area:1/1;content:\"\";border-radius:50%}gux-form-field-radio input[type=radio]:focus-visible::before{outline:var(--gse-ui-radioButton-focus-border-width) var(--gse-ui-radioButton-focus-border-style) var(--gse-ui-radioButton-focus-border-color);outline-offset:1px;border-radius:var(--gse-ui-radioButton-focus-borderRadius)}gux-form-field-radio input[type=radio]:not(:checked)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-default-unselectedForegroundColor)}gux-form-field-radio input[type=radio]:not(:checked):not(:disabled):hover::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-hover-foregroundColor)}gux-form-field-radio input[type=radio]:checked:not(:disabled):hover::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-hover-foregroundColor)}gux-form-field-radio input[type=radio]:checked::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-default-selectedForegroundColor)}gux-form-field-radio input[type=radio]:disabled::before{cursor:not-allowed;opacity:var(--gse-ui-radioButton-disabled-opacity)}gux-form-field-radio.gux-input-error input[type=radio]:not(:checked)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-error-foregroundColor)}gux-form-field-radio.gux-input-error input[type=radio]:checked::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-error-foregroundColor)}gux-form-field-range input[type=range]{position:absolute;inline-size:100%;block-size:var(--gse-ui-rangeSlider-bar-height);margin-block:calc(var(--gse-ui-rangeSlider-handle-height) / 2);margin-block-start:calc(-1 * var(--gse-ui-rangeSlider-handle-height) / 2);margin-inline:0;-webkit-appearance:none;background:transparent}gux-form-field-range input[type=range]:focus{outline:none}gux-form-field-range input[type=range]::-webkit-slider-runnable-track{inline-size:100%;block-size:var(--gse-ui-rangeSlider-bar-height);cursor:pointer;background:transparent}gux-form-field-range input[type=range]::-webkit-slider-thumb{display:block;inline-size:var(--gse-ui-rangeSlider-handle-width);block-size:var(--gse-ui-rangeSlider-handle-height);cursor:pointer;background:var(--gse-ui-rangeSlider-handle-default-backgroundColor);border-radius:100%;margin-block-start:calc(var(--gse-ui-rangeSlider-bar-height) / 2 - var(--gse-ui-rangeSlider-handle-height) / 2);-webkit-appearance:none;border:0 solid var(--gse-ui-rangeSlider-bar-selected-backgroundColor)}gux-form-field-range input[type=range]:focus::-webkit-slider-runnable-track{background:transparent}gux-form-field-range input[type=range]::-moz-range-track{inline-size:100%;block-size:var(--gse-ui-rangeSlider-bar-height);cursor:pointer;background:transparent}gux-form-field-range input[type=range]::-moz-range-thumb{display:block;inline-size:var(--gse-ui-rangeSlider-handle-width);block-size:var(--gse-ui-rangeSlider-handle-height);cursor:pointer;background:var(--gse-ui-rangeSlider-handle-default-backgroundColor);border-radius:100%;margin-block-start:calc(var(--gse-ui-rangeSlider-bar-height) / 2 - var(--gse-ui-rangeSlider-handle-height) / 2);border:0 solid var(--gse-ui-rangeSlider-bar-selected-backgroundColor)}gux-form-field-range input[type=range]::-ms-track{inline-size:100%;block-size:var(--gse-ui-rangeSlider-bar-height);cursor:pointer;color:transparent;background:transparent;border-color:transparent;border-width:var(--gse-ui-rangeSlider-handle-height) 0}gux-form-field-range input[type=range]::-ms-fill-lower{background:transparent}gux-form-field-range input[type=range]::-ms-fill-upper{background:transparent}gux-form-field-range input[type=range]::-ms-thumb{display:block;inline-size:var(--gse-ui-rangeSlider-handle-width);block-size:var(--gse-ui-rangeSlider-handle-height);cursor:pointer;background:var(--gse-ui-rangeSlider-handle-default-backgroundColor);border-radius:100%;border:0 solid var(--gse-ui-rangeSlider-bar-selected-backgroundColor)}gux-form-field-range input[type=range]:focus::-ms-fill-lower{background:transparent}gux-form-field-range input[type=range]:focus::-ms-fill-upper{background:transparent}gux-form-field-range.gux-active input[type=range]::-webkit-slider-thumb,gux-form-field-range.gux-active input[type=range]:hover::-webkit-slider-thumb{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);background-color:var(--gse-ui-rangeSlider-handle-active-backgroundColor)}gux-form-field-range.gux-active input[type=range]::-moz-range-thumb,gux-form-field-range.gux-active input[type=range]:hover::-moz-range-thumb{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);background-color:var(--gse-ui-rangeSlider-handle-active-backgroundColor)}gux-form-field-range.gux-active input[type=range]::-ms-thumb,gux-form-field-range.gux-active input[type=range]:hover::-ms-thumb{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);background-color:var(--gse-ui-rangeSlider-handle-active-backgroundColor)}gux-form-field-range input[type=range]:hover~.gux-range-tooltip-container:not(.gux-hidden),gux-form-field-range input[type=range]:active~.gux-range-tooltip-container:not(.gux-hidden){visibility:visible}gux-form-field-range input[type=range]:hover~.gux-range-tooltip-container:not(.gux-hidden) .gux-range-tooltip,gux-form-field-range input[type=range]:active~.gux-range-tooltip-container:not(.gux-hidden) .gux-range-tooltip{visibility:visible}gux-form-field-range input[type=range]:hover::-webkit-slider-thumb{background-color:var(--gse-ui-rangeSlider-handle-hover-backgroundColor)}gux-form-field-range input[type=range]:hover::-moz-range-thumb{background-color:var(--gse-ui-rangeSlider-handle-hover-backgroundColor)}gux-form-field-range input[type=range]:hover::-ms-thumb{background-color:var(--gse-ui-rangeSlider-handle-hover-backgroundColor)}gux-form-field-search input::-webkit-search-cancel-button,gux-form-field-search input::-webkit-search-results-button,gux-form-field-search input::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}gux-form-field-search input:focus-visible{outline:none}gux-form-field-text-like input[type=number]{-moz-appearance:textfield}gux-form-field-text-like input[type=number]::-webkit-outer-spin-button,gux-form-field-text-like input[type=number]::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}gux-form-field-text-like input:focus-visible{outline:none}gux-table *{box-sizing:border-box}gux-table{border-color:var(--gse-ui-dataTable-border-color);border-style:var(--gse-ui-dataTable-border-style);border-width:var(--gse-ui-dataTable-border-width)}gux-table table{inline-size:100%;white-space:nowrap;border-spacing:0}gux-table table td{block-size:var(--gse-ui-dataTableItems-cell-default-height);padding:var(--gse-ui-dataTableItems-cell-padding);font-family:var(--gse-ui-dataTableItems-cell-text-fontFamily);font-size:var(--gse-ui-dataTableItems-cell-text-fontSize);font-weight:var(--gse-ui-dataTableItems-cell-text-fontWeight);line-height:var(--gse-ui-dataTableItems-cell-text-lineHeight);color:var(--gse-ui-dataTableItems-cell-foregroundColor);text-align:start}gux-table table td:has(gux-row-select){inline-size:var(--gse-ui-dataTableItems-cell-multiselect-checkboxCell-default-width)}gux-table table td gux-icon{color:var(--gse-ui-dataTableItems-cell-icon-foregroundColor)}gux-table table td gux-button>gux-icon{color:inherit}gux-table table th{block-size:var(--gse-ui-dataTableItems-header-default-height);padding:var(--gse-ui-dataTableItems-header-padding);font-family:var(--gse-ui-dataTableItems-header-text-fontFamily);font-size:var(--gse-ui-dataTableItems-header-text-fontSize);font-weight:var(--gse-ui-dataTableItems-header-text-fontWeight);line-height:var(--gse-ui-dataTableItems-header-text-lineHeight);color:var(--gse-ui-dataTableItems-header-foregroundColor);background:var(--gse-ui-dataTableItems-header-defaultBackgroundColor)}gux-table table th:has(gux-all-row-select){inline-size:var(--gse-ui-dataTableItems-header-multiselect-default-width)}gux-table table th,gux-table table td{text-align:start;border-color:var(--gse-ui-dataTable-border-color);border-style:var(--gse-ui-dataTable-border-style);border-width:0 var(--gse-ui-dataTable-border-width) var(--gse-ui-dataTable-border-width) 0}gux-table table th[data-cell-numeric],gux-table table td[data-cell-numeric],gux-table table th[data-cell-action],gux-table table td[data-cell-action]{text-align:end}gux-table table th:has(gux-all-row-select){inline-size:var(--gse-ui-dataTableItems-header-multiselect-default-width)}gux-table table th:last-child,gux-table table td:last-child{border-inline-end-width:0}gux-table table thead{position:sticky;inset-block-start:0;z-index:var(--gse-semantic-zIndex-sticky)}gux-table table thead th{position:relative}gux-table table tbody tr td{background-color:var(--gse-ui-dataTableItems-cell-defaultBackgroundColor)}gux-table table tbody tr:nth-child(2n) td{background-color:var(--gse-ui-dataTableItems-cell-altBackgroundColor)}gux-table table tbody tr:last-child td{border-block-end-width:0}gux-table table tbody tr:hover td,gux-table table tbody tr:nth-child(2n):hover td{background-color:var(--gse-ui-dataTableItems-cell-hoverBackgroundColor)}gux-table[gs-compact] th{block-size:var(--gse-ui-dataTableItems-header-compact-height)}gux-table[gs-compact] th:has(gux-all-row-select){inline-size:var(--gse-ui-dataTableItems-header-multiselect-compact-width)}gux-table[gs-compact] td{block-size:var(--gse-ui-dataTableItems-cell-compact-height)}gux-table[gs-compact] td:has(gux-row-select){inline-size:var(--gse-ui-dataTableItems-cell-multiselect-checkboxCell-compact-width)}gux-table[gs-obj-table] tbody th,gux-table[gs-obj-table] tbody td{border-width:0}gux-table[gs-obj-table] tbody tr[data-selected-row] td{background:var(--gse-ui-dataTableItems-cell-hoverBackgroundColor)}th:not([data-cell-action]):not([data-cell-numeric]):has(>gux-sort-control){padding-inline-end:calc(2 * var(--gse-ui-dataTableItems-header-gap) + var(--gse-ui-icon-small-size)) !important}th[data-cell-numeric]:has(>gux-sort-control),th[data-cell-action]:has(>gux-sort-control){padding-inline-start:calc(2 * var(--gse-ui-dataTableItems-header-gap) + var(--gse-ui-icon-small-size) + 2px) !important}gux-form-beta{}gux-form-beta form{max-inline-size:var(--gse-semantic-formControl-form-maxWidth);}gux-form-beta form header{display:flex;flex-direction:column;gap:var(--gse-semantic-formControl-formHeader-gap);padding-block-end:var(--gse-semantic-formControl-fieldset-header-paddingBottom);text-align:start}gux-form-beta form header gux-form-heading{margin:0;font-family:var(--gse-semantic-body-lg-semiBold-fontFamily) !important;font-size:var(--gse-semantic-body-lg-semiBold-fontSize) !important;font-weight:var(--gse-semantic-body-lg-semiBold-fontWeight) !important;line-height:var(--gse-semantic-body-lg-semiBold-lineHeight) !important;color:var(--gse-semantic-foreground-container-highEmphasis) !important}gux-form-beta form gux-form-description{margin:0 !important;font-family:var(--gse-semantic-body-sm-regular-fontFamily) !important;font-size:var(--gse-semantic-body-sm-regular-fontSize) !important;font-weight:var(--gse-semantic-body-sm-regular-fontWeight) !important;line-height:var(--gse-semantic-body-sm-regular-lineHeight) !important;color:var(--gse-semantic-foreground-container-midEmphasis) !important}gux-form-beta form fieldset{all:unset;display:flex;flex-direction:column;gap:var(--gse-semantic-formControl-formBody-gap)}gux-form-beta form fieldset legend{display:flex;flex-direction:column;gap:var(--gse-semantic-formControl-fieldset-header-gap);padding-block-end:var(--gse-semantic-formControl-fieldset-paddingBottom);padding-inline:0;text-align:start}gux-form-beta form fieldset legend gux-form-fieldset-heading{margin:0;font-family:var(--gse-semantic-heading-md-bold-fontFamily) !important;font-size:var(--gse-semantic-heading-md-bold-fontSize) !important;font-weight:var(--gse-semantic-heading-md-bold-fontWeight) !important;line-height:var(--gse-semantic-heading-md-bold-lineHeight) !important;color:var(--gse-semantic-foreground-container-highEmphasis) !important}gux-form-beta form fieldset:not(:has(+gux-form-footer)){padding-block-end:var(--gse-semantic-formControl-fieldset-paddingBottom)}gux-form-beta form>*:not(fieldset):not(gux-form-footer):not(header+*):not(fieldset+*){margin-block-start:var(--gse-semantic-formControl-formBody-gap)}gux-form-beta form>*:not(gux-form-footer){padding-inline:var(--gse-semantic-formControl-form-margin)}gux-form-field-color input:focus,gux-form-field-color input:focus-visible{outline:none;border:0;box-shadow:none}gux-form-field-color input::-webkit-color-swatch-wrapper{padding:0}gux-form-field-color input::-webkit-color-swatch,gux-form-field-color input::-moz-color-swatch{inline-size:var(--gse-ui-colorPicker-input-swatchSizing);block-size:var(--gse-ui-colorPicker-input-swatchSizing);border:none;border-radius:var(--gse-ui-colorPicker-input-swatchBorderRadius)}gux-selector-card-beta input:focus-visible{outline:none}gux-form-field-file input:focus-visible{outline:none}gux-form-field-file input[type=file]::file-selector-button{min-inline-size:var(--gse-ui-button-iconOnly-width);block-size:var(--gse-ui-button-default-height);padding:var(--gse-ui-button-default-padding);margin-inline-end:8px;overflow:hidden;text-overflow:ellipsis;font-family:var(--gse-ui-button-text-fontFamily);font-size:var(--gse-ui-button-text-fontSize);font-weight:var(--gse-ui-button-text-fontWeight);line-height:var(--gse-ui-button-text-lineHeight);color:var(--gse-ui-button-secondary-default-foregroundColor);white-space:nowrap;cursor:pointer;background-color:var(--gse-ui-button-secondary-default-backgroundColor);border:none;border-radius:var(--gse-ui-button-borderRadius)}gux-form-field-file input[type=file]::file-selector-button:hover{color:var(--gse-ui-button-secondary-hover-foregroundColor);background-color:var(--gse-ui-button-secondary-hover-backgroundColor)}gux-form-field-file input[type=file]:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-formControl-input-borderRadius)}gux-form-field-file input[type=file]:disabled{pointer-events:none;cursor:not-allowed;user-select:none;opacity:var(--gse-ui-button-disabled-opacity)}.editor-styles{font-family:var(--gse-ui-rte-paragraph-md-regular-fontFamily);font-size:var(--gse-ui-rte-paragraph-md-regular-fontSize);font-weight:var(--gse-ui-rte-paragraph-md-regular-fontWeight);line-height:var(--gse-ui-rte-paragraph-md-regular-lineHeight);color:var(--gse-ui-rte-paragraph-foregroundColor);outline:none}.editor-styles p{margin:0}.editor-styles a{cursor:pointer}.editor-styles blockquote{margin:var(--gse-ui-rte-quoteBlock-margin);border-inline-start:var(--gse-ui-rte-quoteBlock-borderLeft-width) solid var(--gse-ui-rte-quoteBlock-borderLeft-color)}.editor-styles blockquote p{margin-inline-start:var(--gse-ui-rte-quoteBlock-container-gap);font-family:var(--gse-ui-rte-quoteBlock-md-regular-fontFamily);font-size:var(--gse-ui-rte-quoteBlock-md-regular-fontSize);font-weight:var(--gse-ui-rte-quoteBlock-md-regular-fontWeight);line-height:var(--gse-ui-rte-quoteBlock-md-regular-lineHeight);color:var(--gse-ui-rte-quoteBlock-foregroundColor)}.editor-styles pre{padding:var(--gse-ui-rte-codeBlock-padding);background-color:var(--gse-ui-rte-codeBlock-backgroundColor);border:var(--gse-ui-rte-codeBlock-border-width) var(--gse-ui-rte-codeBlock-border-style) var(--gse-ui-rte-codeBlock-border-color);border-radius:var(--gse-ui-rte-codeBlock-borderRadius)}.editor-styles pre code{font-family:var(--gse-ui-rte-codeBlock-sm-regular-fontFamily);font-size:var(--gse-ui-rte-codeBlock-sm-regular-fontSize);font-weight:var(--gse-ui-rte-codeBlock-sm-regular-fontWeight);line-height:var(--gse-ui-rte-codeBlock-sm-regular-lineHeight);color:var(--gse-ui-rte-codeBlock-foregroundColor);white-space:pre-wrap}";

/*
 Stencil Client Platform v4.36.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'gux-avatar-focusable-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-avatar-focusable-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-date-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-date-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-date-time-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-date-time-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tabs-advanced.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tabs-advanced.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-time-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-time-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tooltip-pointer-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tooltip-pointer-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-accordion.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-accordion.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-accordion-section.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-accordion-section.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-action-toast-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-action-toast-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-all-row-select.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-all-row-select.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-avatar-group-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-avatar-group-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-avatar-group-item-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-avatar-group-item-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-blank-state.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-blank-state.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-breadcrumb-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-breadcrumb-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-card.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-card.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-dropdown-option.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-dropdown-option.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-description.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-description.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-color.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-color.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-file.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-file.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-radio.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-radio.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-range.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-range.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-select.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-select.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-textarea.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-textarea.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-fieldset-heading.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-fieldset-heading.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-footer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-footer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-heading.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-heading.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-label-info-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-label-info-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-loading-message.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-loading-message.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-menu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-menu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-menu-option.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-menu-option.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-modal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-modal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-modal-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-modal-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-modal-side-panel-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-modal-side-panel-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-notification-toast-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-notification-toast-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-option-icon.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-option-icon.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-option-status-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-option-status-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-page-loading-spinner.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-page-loading-spinner.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-pagination.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-pagination.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-pagination-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-pagination-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-popover-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-popover-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-popover-list-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-popover-list-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rating.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rating.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-highlight-list-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-highlight-list-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-action.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-action.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-action-group.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-action-group.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-action-link.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-action-link.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-action-rich-style.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-action-rich-style.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-action-text-highlight.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-action-text-highlight.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-row-select.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-row-select.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-segmented-control-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-segmented-control-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-segmented-control-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-segmented-control-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-selector-card-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-selector-card-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-selector-cards-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-selector-cards-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-side-panel-heading.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-side-panel-heading.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-simple-toast-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-simple-toast-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-skip-navigation-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-skip-navigation-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-sort-control.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-sort-control.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-status-indicator-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-status-indicator-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-step.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-step.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-step-title.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-step-title.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-stepper-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-stepper-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-submenu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-submenu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-switch-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-switch-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-switch-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-switch-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tab.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tab.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tab-advanced.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tab-advanced.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tab-advanced-panel.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tab-advanced-panel.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tab-panel.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tab-panel.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-table.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-table.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-table-select-menu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-table-select-menu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tabs.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tabs.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-time-zone-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-time-zone-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-time-zone-picker-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-time-zone-picker-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-toast.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-toast.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-search.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-search.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-list-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-list-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-option-group-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-option-group-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-side-panel-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-side-panel-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-table-toolbar-custom-action.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-table-toolbar-custom-action.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-toggle-slider.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-toggle-slider.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-cta-group.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-cta-group.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-icon-tooltip-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-icon-tooltip-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-link-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-link-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-list-divider.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-list-divider.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-popover-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-popover-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-announce-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-announce-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-checkbox.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-checkbox.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-text-like.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-text-like.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-text-editor-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-text-editor-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tooltip-title.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tooltip-title.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-screen-reader-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-screen-reader-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-popup.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-popup.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-button-slot.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-button-slot.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-advanced-dropdown-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-advanced-dropdown-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-avatar-change-photo-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-avatar-change-photo-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-badge.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-badge.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-breadcrumbs.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-breadcrumbs.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-button-multi.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-button-multi.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-column-manager.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-column-manager.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-context-menu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-context-menu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-copy-to-clipboard.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-copy-to-clipboard.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-create-option.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-create-option.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-disclosure-button-legacy.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-disclosure-button-legacy.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-dropdown-multi.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-dropdown-multi.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-flyout-menu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-flyout-menu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-dropdown.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-dropdown.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-file-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-file-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-phone.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-phone.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-radio-group-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-radio-group-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-time-picker.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-time-picker.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-time-zone-picker.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-time-zone-picker.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-inline-alert.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-inline-alert.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-inline-dropdown-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-inline-dropdown-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-listbox-multi.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-listbox-multi.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-month-picker-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-month-picker-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-option-multi.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-option-multi.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-pagination-cursor.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-pagination-cursor.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-skip-navigation-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-skip-navigation-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tab-advanced-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tab-advanced-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tab-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tab-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-table-toolbar.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-table-toolbar.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-table-toolbar-action.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-table-toolbar-action.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tag.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tag.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-toggle.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-toggle.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-content-search.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-content-search.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-day-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-day-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-dropdown-multi-tag.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-dropdown-multi-tag.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-file-list-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-file-list-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-month-calendar.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-month-calendar.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-table-toolbar-menu-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-table-toolbar-menu-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-text-highlight.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-text-highlight.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-pagination-items-per-page.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-pagination-items-per-page.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-input-clear-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-input-clear-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-dismiss-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-dismiss-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-label-indicator.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-label-indicator.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tooltip-base-beta_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tooltip-base-beta_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-action-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-action-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-avatar-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-avatar-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-calendar-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-calendar-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-column-manager-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-column-manager-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-datepicker.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-datepicker.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-checkbox-group-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-checkbox-group-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-radial-progress.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-radial-progress.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-time-picker.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-time-picker.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-flag-icon-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-flag-icon-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-month-list_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-month-list_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-calendar.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-calendar.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-form-field-number_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-form-field-number_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-button_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-button_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-radial-loading.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-radial-loading.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-tooltip_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-tooltip_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-icon.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-icon.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-pagination-buttons_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-pagination-buttons_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-rich-style-list-item_3.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-rich-style-list-item_3.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-avatar-group-add-item-beta_3.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-avatar-group-add-item-beta_3.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-phone-input-beta.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-phone-input-beta.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-dropdown_3.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-dropdown_3.cjs.entry.js')); }).then(processMod, consoleError);
                case 'gux-pagination-buttons-legacy_3.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './gux-pagination-buttons-legacy_3.cjs.entry.js')); }).then(processMod, consoleError);
          }
      }
  return (function (t) { return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(t)); }); })(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}[hydrated]{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var readTask = /* @__PURE__ */ queueTask(queueDomReads, false);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/runtime/asset-path.ts
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  if (!supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({
    mode: "open",
    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */)
  }) ;
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0)) {
      slottedNodes.push(childNode);
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                if (supportsMutableAdoptedStyleSheets) {
                  styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                } else {
                  styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
                }
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      if (supportsMutableAdoptedStyleSheets) {
        styleContainerNode.adoptedStyleSheets.push(style);
      } else {
        styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      if (isFormAssociated && typeof propValue === "string") {
        return propValue === "" || !!propValue;
      } else {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (true)) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var forceUpdate = (ref) => {
  var _a;
  {
    const hostRef = getHostRef(ref);
    const isConnected = (_a = hostRef == null ? void 0 : hostRef.$hostElement$) == null ? void 0 : _a.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _b;
  return elm.setAttribute((_b = BUILD.hydratedSelectorName) != null ? _b : "hydrated", "") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0],
    !!(cmpMeta.$flags$ & 64 /* formAssociated */)
  );
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$flags$ & 64 /* formAssociated */ && flags & 1 /* isElementConstructor */) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((cbName) => {
      Object.defineProperty(prototype, cbName, {
        value(...args) {
          var _a2;
          const hostRef = getHostRef(this);
          const instance = hostRef == null ? void 0 : hostRef.$lazyInstance$ ;
          if (!instance) {
            (_a2 = hostRef == null ? void 0 : hostRef.$onReadyPromise$) == null ? void 0 : _a2.then((asyncInstance) => {
              const cb = asyncInstance[cbName];
              typeof cb === "function" && cb.call(asyncInstance, ...args);
            });
          } else {
            const cb = instance[cbName] ;
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      });
    });
  }
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                )
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                );
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      if (cmpMeta.$flags$ & 64 /* formAssociated */) {
        HostElement.formAssociated = true;
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 8 /* TargetWindow */) {
    return win;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

exports.Host = Host;
exports.bootstrapLazy = bootstrapLazy;
exports.createEvent = createEvent;
exports.forceUpdate = forceUpdate;
exports.getAssetPath = getAssetPath;
exports.getElement = getElement;
exports.globalScripts = globalScripts;
exports.h = h;
exports.promiseResolve = promiseResolve;
exports.readTask = readTask;
exports.registerInstance = registerInstance;
exports.setNonce = setNonce;
exports.writeTask = writeTask;
