"use client";

import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import { DorkForm } from "@/components/dork/dork-form";
import { DorkList } from "@/components/dork/dork-list";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Dork } from "@/lib/data/dork-data";
import { DorkStorage } from "@/lib/storage/dork-storage";
import { nanoid } from "nanoid";

export default function Home() {
  const [dorks, setDorks] = useState<Dork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dorkStorage = DorkStorage.getInstance();
  const t = useTranslations('homepage');

  // Load dorks from localStorage on component mount
  useEffect(() => {
    const loadDorks = async () => {
      // Simulate a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));

      const storedDorks = dorkStorage.getDorks();
      setDorks(storedDorks);
      setIsLoading(false);
    };

    loadDorks();
  }, [dorkStorage]);

  const handleAddDork = (dorkType: string, dorkText: string) => {
    let processedText = dorkText.trim();

    // If the text contains spaces, wrap it in quotes
    if (processedText.includes(" ")) {
      processedText = `"${processedText}"`;
    }

    const newDork: Dork = {
      id: nanoid(),
      dork: `${dorkType}:${processedText}`,
    };

    const updatedDorks = [...dorks, newDork];
    setDorks(updatedDorks);
    dorkStorage.saveDorks(updatedDorks);
  };

  const handleRemoveDork = (id: string) => {
    const updatedDorks = dorks.filter(dork => dork.id !== id);
    setDorks(updatedDorks);
    dorkStorage.saveDorks(updatedDorks);
  };

  const handleSearch = (dorks: Dork[]) => {
    const query = dorks.map(d => d.dork).join(" ");
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, "_blank");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-chart-1/5">
        <div className="text-center space-y-6">
          <div className="p-8 bg-card/60 backdrop-blur-sm rounded-3xl border border-primary/20 shadow-md">
            <LoadingSpinner size="lg" text={t('loading.text')} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-chart-1/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-chart-1/10 rounded-full blur-2xl animate-pulse delay-1000 float"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-2000 float"></div>

      {/* Hero Section with Enhanced Design */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-20">
            {/* Logo Animation */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
                <div className="relative p-8 bg-gradient-to-br from-card/80 via-card/90 to-card backdrop-blur-xl rounded-3xl border border-primary/20 shadow-lg float">
                  <i className="fas fa-search text-7xl text-gradient"></i>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-8xl font-black tracking-tight mb-8">
              <span className="text-gradient gradient-bg-animated bg-clip-text">{t('title')}</span>
            </h1>

            {/* Subtitle */}
            <div className="relative max-w-5xl mx-auto">
              <p className="text-3xl text-muted-foreground leading-relaxed mb-8">
                {t.rich('subtitle', {
                  potentialSpan: () => <span className="text-primary font-bold">{t('potentialText')}</span>,
                  professionalSpan: () => <span className="text-chart-1 font-bold"> {t('professionalText')}</span>,
                  precisionSpan: () => <span className="text-chart-2 font-bold"> {t('precisionText')}</span>
                })}
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-primary via-chart-1 to-chart-2 rounded-full shimmer"></div>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                { icon: "🚀", text: t('features.lightningFast'), color: "primary" },
                { icon: "🛡️", text: t('features.securityFocused'), color: "chart-1" },
                { icon: "📚", text: t('features.educational'), color: "chart-2" },
                { icon: "🎯", text: t('features.precisionTargeting'), color: "destructive" }
              ].map((tag, index) => (
                <div
                  key={index}
                  className={`group bg-${tag.color}/10 text-${tag.color} px-6 py-3 rounded-2xl text-lg font-semibold border border-${tag.color}/20 hover:bg-${tag.color}/20 transition-all duration-300 hover:scale-110 cursor-pointer`}
                >
                  <span className="mr-2 group-hover:scale-125 transition-transform duration-300 inline-block">
                    {tag.icon}
                  </span>
                  {tag.text}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content with Glass Morphism - Reduced Shadows */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-8xl mx-auto">
            {/* Enhanced Dork Form */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-chart-1/30 to-primary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-card/60 border border-primary/20 rounded-3xl p-2 shadow-md">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl">
                  <DorkForm onAddDork={handleAddDork} />
                </div>
              </div>
            </div>

            {/* Enhanced Dork List */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-chart-1/30 via-chart-2/30 to-chart-1/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-card/60 border border-chart-1/20 rounded-3xl p-2 shadow-md">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl">
                  <DorkList
                    dorks={dorks}
                    onRemoveDork={handleRemoveDork}
                    onSearch={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section - Reduced Shadows */}
      <div className="relative z-10 py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              <span className="text-gradient">{t('whyChoose.title')}</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('whyChoose.subtitle')}
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                icon: "fas fa-bolt",
                title: t('whyChoose.lightningPerformance.title'),
                description: t('whyChoose.lightningPerformance.description'),
                color: "primary",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "fas fa-shield-alt",
                title: t('whyChoose.ethicalFramework.title'),
                description: t('whyChoose.ethicalFramework.description'),
                color: "chart-1",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: "fas fa-brain",
                title: t('whyChoose.advancedIntelligence.title'),
                description: t('whyChoose.advancedIntelligence.description'),
                color: "chart-2",
                gradient: "from-purple-500 to-violet-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative card-hover cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-chart-1/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center p-10 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 shadow-md">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} text-white rounded-3xl mb-8 group-hover:scale-125 transition-all duration-500 shadow-lg`}>
                    <i className={`${feature.icon} text-3xl`}></i>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary to-chart-1 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative flex flex-col sm:flex-row gap-8 justify-center items-center">
                <a
                  href="/about"
                  className="group relative px-12 py-6 bg-gradient-to-r from-primary to-chart-1 text-primary-foreground font-bold text-xl rounded-2xl btn-gradient overflow-hidden transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/25"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <i className="fas fa-rocket group-hover:scale-125 transition-transform duration-300"></i>
                    {t('cta.exploreAdvanced')}
                  </span>
                </a>

                <a
                  href="/contact"
                  className="group px-12 py-6 border-3 border-primary text-primary font-bold text-xl rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <span className="flex items-center gap-4">
                    <i className="fas fa-users group-hover:scale-125 transition-transform duration-300"></i>
                    {t('cta.joinCommunity')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}