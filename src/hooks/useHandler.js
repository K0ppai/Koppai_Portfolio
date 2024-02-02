export const useHandler = () => {
  const handleNavigation = (path, navigate, sectionId) => {
    if (path.startsWith('/projects/')) {
      navigate('/');
    }
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleIntersection = (entries, setActiveSection) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  const handleSectionObservation = (sections, setActiveSection) => {
    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
    };

    const observer = new IntersectionObserver(
      (entries) => handleIntersection(entries, setActiveSection),
      observerOptions,
    );

    sections.forEach((section) => {
      const target = document.getElementById(section);
      if (target) {
        observer.observe(target);
      }
    });

    return observer;
  };

  return {
    handleNavigation,
    handleSectionObservation,
  };
};
