{/* VISA TYPE - Find this label and add htmlFor */}
<label
  htmlFor="visaType"
  className="block text-sm font-bold mb-2"
  style={{ color: '#0a1628' }}
>
  Visa Category *
</label>
<div className="relative">
  <Globe size={17} className="absolute text-gray-400 pointer-events-none"
    style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
  <ChevronDown size={17} className="absolute text-gray-400 pointer-events-none"
    style={{ right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
  <select
    id="visaType"
    name="visaType"
    value={formData.visaType}
    onChange={handleChange}
    required
    style={{ border: '2px solid #e5e7eb', fontSize: '15px', color: '#0a1628', width: '100%', borderRadius: '12px', outline: 'none', background: 'white', paddingLeft: '42px', paddingRight: '40px', paddingTop: '13px', paddingBottom: '13px', appearance: 'none' }}
    onFocus={focusStyle}
    onBlur={blurStyle}
  >
    <option value="">Select a category</option>
    <option value="visit">Visit Visa</option>
    <option value="work">Work Visa</option>
    <option value="study">Study Abroad</option>
    <option value="skilled">Skilled Immigration</option>
    <option value="business">Business Immigration</option>
    <option value="travel">Travel Management</option>
  </select>
</div>

{/* COUNTRY - Find this label and add htmlFor */}
<label
  htmlFor="country"
  className="block text-sm font-bold mb-2"
  style={{ color: '#0a1628' }}
>
  Destination Country *
</label>
<div className="relative">
  <MapPin size={17} className="absolute text-gray-400 pointer-events-none"
    style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
  <ChevronDown size={17} className="absolute text-gray-400 pointer-events-none"
    style={{ right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
  <select
    id="country"
    name="country"
    value={formData.country}
    onChange={handleChange}
    required
    style={{ border: '2px solid #e5e7eb', fontSize: '15px', color: '#0a1628', width: '100%', borderRadius: '12px', outline: 'none', background: 'white', paddingLeft: '42px', paddingRight: '40px', paddingTop: '13px', paddingBottom: '13px', appearance: 'none' }}
    onFocus={focusStyle}
    onBlur={blurStyle}
  >
    <option value="">Select your destination</option>
    <option value="usa">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="canada">Canada</option>
    <option value="australia">Australia</option>
    <option value="newzealand">New Zealand</option>
    <option value="uae">United Arab Emirates</option>
    <option value="europe">Europe (Schengen)</option>
  </select>
</div>
