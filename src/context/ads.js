import React, { createContext, useContext, useState } from "react";

const AdsContext = createContext();

const INITIAL_ADS = [];

export function AdsProvider({ children }) {
  const [ads, setAds] = useState(INITIAL_ADS);

  return (
    <AdsContext.Provider value={{ ads, setAds }}>
      {children}
    </AdsContext.Provider>
  );
}

export function useAds() {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAds must be used within an AdsProvider");
  }
  return context;
}

export function useGetAds(productId) {
  const { ads } = useAds();
  return ads.filter((ad) => ad.productId === productId);
}

export function useGetAd(id) {
  const { ads } = useAds();
  return ads.find((ad) => ad.id === id);
}

export function useCreateAd() {
  const { ads, setAds } = useAds();
  return (ad) => {
    const id = Date.now().toString();
    ad.id = id;
    const newAds = [...ads, ad];
    setAds(newAds);
  };
}

export function useDeleteAd() {
  const { ads, setAds } = useAds();
  return (id) => {
    const newAds = ads.filter((ad) => ad.id !== id);
    setAds(newAds);
  };
}

export function useEditAd() {
  const { ads, setAds } = useAds();
  return (editedAd) => {
    const newAds = ads.map((ad) => (ad.id === editedAd.id ? editedAd : ad));
    setAds(newAds);
  };
}
