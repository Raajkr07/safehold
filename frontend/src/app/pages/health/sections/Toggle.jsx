export default function ToggleSection({ visibleSections, toggleSection }) {
  const handleClick = (section) => {
    const newState = Object.keys(visibleSections).reduce((acc, key) => {
      acc[key] = key === section;
      return acc;
    }, {});
    toggleSection(newState);
  };

  return (
    <section>
      <div className="flex justify-center gap-3">
        {Object.keys(visibleSections).map((section) => (
          <button
            key={section}
            className={`px-4 py-2 hover:scale-105 rounded-lg border transition ${
              visibleSections[section]
                ? "bg-primary font-bold text-white"
                : "bg-white font-bold text-gray-700 border-gray-300"
            }`}
            onClick={() => handleClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}
