-- Up
CREATE TABLE Destination (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	slug TEXT
);

CREATE TABLE Role (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	slug TEXT,
	destinationId INTEGER REFERENCES Destination(id)
);

CREATE TABLE Plan (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	eligibility_details TEXT, 
	category TEXT,
	slug TEXT,
	remarks TEXT,
	application_duration INTEGER,
	validity INTEGER,
	renewable BOOLEAN,
	passes_for_family BOOLEAN,
	foreign_worker_levy BOOLEAN,
	quota INTEGER,
	application_link TEXT,
	destinationId INTEGER REFERENCES Destination(id)
);

CREATE TABLE Plan_Eligibility_Details (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	content TEXT,
	category TEXT,
	planId INTEGER REFERENCES Plan(id)
);

CREATE TABLE Plan_Age_Eligibility (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	lower_bound_age INTEGER,
	upper_bound_age INTEGER,
	planId INTEGER REFERENCES Plan(id)
);	

CREATE TABLE Plan_Country_Eligibility (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	country TEXT,
	planId INTEGER REFERENCES Plan(id)
);

CREATE TABLE Source (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	page TEXT,
	name TEXT,
	link TEXT
);

CREATE TABLE Plan_Cost (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	content TEXT,
	planId INTEGER REFERENCES Plan(id)
);

CREATE TABLE Plan_Step (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	sequence INTEGER,
	content TEXT,
	owner TEXT,
	processing_time TEXT,
	deadline TEXT,
	result TEXT,
	planId INTEGER REFERENCES Plan(id)
);

INSERT INTO Destination (name, slug) values ('Singapore', 'singapore');
INSERT INTO Destination (name, slug) values ('Malaysia', 'malaysia');
INSERT INTO Destination (name, slug) values ('Indonesia', 'indonesia');
INSERT INTO Destination (name, slug) values ('Thailand', 'thailand');
INSERT INTO Destination (name, slug) values ('Cambodia', 'cambodia');
INSERT INTO Destination (name, slug) values ('Myanmar', 'myanmar');
INSERT INTO Destination (name, slug) values ('Vietnam', 'vietnam');

INSERT INTO Role (name, slug, destinationId) values ('Software Developer', 'software-developer', 1);

INSERT INTO Plan (name, eligibility_details, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ("Work Holiday Pass (under Work Holiday Programme)", "<div className='list-group list-group-flush'><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>General</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>You are aged 18 to 25 at the time of application.</li><li className='text-muted' style='color: #333333 !important;'>You are an undergraduate or graduate of a university in Australia, France, Germany, Hong Kong, Japan, Netherlands, New Zealand, Switzerland, United Kingdom or United States.</li><li className='text-muted' style='color: #333333 !important;'>Your university is recognised by the government of the respective ten countries or regions.</li></ul></div></div><hr /><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>Undergraduate</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>You have been a resident and a full-time student of the university for at least 3 months before applying for the pass.</li></ul></div></div><hr /><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>Graduate</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>You were a resident and a full-time student of the university.</li></ul></div></div</div>","Trainees & Students", "work-holiday-pass-under-work-holiday-programme-singapore", "", 21, 180, FALSE, FALSE, FALSE, 2000, "https://service2.mom.gov.sg/workpass/whp/whp_applications", 1);
INSERT INTO Plan (name, eligibility_details, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ("Work Holiday Pass (under Work and Holiday Visa Programme)", "<div className='list-group list-group-flush'><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>General</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>You are an Australian citizen.</li><li className='text-muted' style='color: #333333 !important;'>You are aged 18 to 30 at the time of application.</li><li className='text-muted' style='color: #333333 !important;'>You hold a university degree, or have completed the equivalent of two years of full-time undergraduate university study.</li></ul></div></div</div>","Trainees & Students", "work-holiday-pass-under-work-and-holiday-visa-programme-singapore", "For Australian Students", 28, 360, FALSE, FALSE, FALSE, 500, "https://service2.mom.gov.sg/workpass/whvp/whvp_applications", 1);
INSERT INTO Plan (name, eligibility_details, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ("Employment Pass", "<div className='list-group list-group-flush'><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>General</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>Have a job offer in Singapore.</li><li className='text-muted' style='color: #333333 !important;'>Work in a managerial, executive or specialised job.</li><li className='text-muted' style='color: #333333 !important;'>Earn a fixed monthly salary of at least $4,500 (older, more experienced candidates need higher salaries).</li><li className='text-muted' style='color: #333333 !important;'>Have acceptable qualifications, usually a good university degree, professional qualifications or specialised skills.</li></ul></div></div</div>","Professionals", "employment-pass-singapore", "", 21, 730, TRUE, TRUE, FALSE, -1, "https://www.mom.gov.sg/eservices/services/apply-for-a-new-ep-and-s-pass", 1);
INSERT INTO Plan (name, eligibility_details, category, slug, remarks, application_duration, validity, renewable, passes_for_family, foreign_worker_levy, quota, application_link, destinationId) values ("EntrePass", "<div className='list-group list-group-flush'><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>General</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>Have started, or intend to start, a private limited company registered with ACRA.</li><li className='text-muted' style='color: #333333 !important;'>If registered, the company must be less than 6 months old on the date you apply.</li></ul></div></div><hr/><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>Entrepreneur</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>Your company raised funding of at least $100,000 from a government investment vehicle, venture capitalist (VC) or business angel that is recognised by a Singapore Government agency.</li><li className='text-muted' style='color: #333333 !important;'>Your company is an existing incubatee at an incubator or accelerator in Singapore that is recognised by the Government.</li><li className='text-muted' style='color: #333333 !important;'>You have significant business experience or network and promising entrepreneurial track record of starting highly-scalable businesses and want to establish, develop and manage a new or existing business in Singapore.</li></ul></div></div><hr/><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>Innovator</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>You or your company holds an intellectual property (IP), registered with an approved national IP institution, which delivers a significant competitive advantage to your proposed business that cannot be easily replicated.</li><li className='text-muted' style='color: #333333 !important;'>Your company has an ongoing research collaboration with a research institution under the Agency for Science, Technology and Research (A*STAR), an Institute of Higher Learning (IHL) in Singapore.</li><li className='text-muted' style='color: #333333 !important;'>You have exceptional technical or domain expertise in an area related to your proposed business.</li></ul></div></div><hr/><div className='list-group-item d-flex align-items-center'><div className='mr-auto'><p className='font-weight-bold mb-1' style='font-weight: 600 !important; margin-bottom: 0.25rem !important;'>Investor</p><ul className='mb-1' style='0.25rem !important;'><li className='text-muted' style='color: #333333 !important;'>To find out more about the eligibility criteria, you can contact Enterprise Singapore at enquiry@enterprisesg.gov.sg.</li></ul></div></div></div>","Professionals", "entrepass-singapore", "", 56, 365, TRUE, TRUE, FALSE, -1, "https://form.gov.sg/#!/5ce3a8b404ef480010a73da3", 1);

INSERT INTO Plan_Cost (content, planId) values ('175 SGD for each pass', 1);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 1);

INSERT INTO Plan_Cost (content, planId) values ('175 SGD for each pass', 2);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 2);

INSERT INTO Plan_Cost (content, planId) values ('105 SGD for each pass upon application', 3);
INSERT INTO Plan_Cost (content, planId) values ('225 SGD for each pass upon issuance', 3);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 3);

INSERT INTO Plan_Cost (content, planId) values ('105 SGD for each pass upon application', 4);
INSERT INTO Plan_Cost (content, planId) values ('225 SGD for each pass upon issuance', 4);
INSERT INTO Plan_Cost (content, planId) values ('30 SGD for each Multiple Journey Visa', 4);

INSERT INTO Source (page, name, link) values ('work-holiday-pass-under-work-holiday-programme-singapore', 'Work Holiday Pass (under Work Holiday Programme)', 'https://www.mom.gov.sg/passes-and-permits/work-holiday-programme');
INSERT INTO Source (page, name, link) values ('work-holiday-pass-under-work-and-holiday-visa-programme-singapore', 'Work Holiday Pass (under Work and Holiday Visa Programme)', 'https://www.mom.gov.sg/passes-and-permits/work-and-holiday-visa-programme');
INSERT INTO Source (page, name, link) values ('employment-pass-singapore', 'Employment Pass', 'https://www.mom.gov.sg/passes-and-permits/employment-pass');
INSERT INTO Source (page, name, link) values ('entrepass-singapore', 'EntrePass', 'https://www.mom.gov.sg/passes-and-permits/entrepass');

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 25, 1);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("Australia", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("France", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Germany", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Hong Kong", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Japan", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Netherlands", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("New Zealand", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("Switzerland", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("United Kingdom", 1);
INSERT INTO Plan_Country_Eligibility (country, planId) values ("United States", 1);

INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (1, "Submit an application", "Candidate", "3 weeks", "","In-principle approval letter or rejection letter", 1);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (2, "Get the pass issued", "Candidate, company representative or employment agency", "Immediate", "Within 3 months of in-principle approval","Notification letter", 1);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (3, "Register fingerprints and photo (if required)", "Candidate", "Immediate", "Within 2 weeks after pass is issued","Acknowledgment of card delivery", 1);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (4, "Receive the card", "Authorised recipients or candidate", "Immediate", "4 working days after registration or document verification","Work Holiday Pass card", 1);

INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You are an Australian citizen.', 'General', 2);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You are aged 18 to 30 at the time of application.', 'General', 2);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You hold a university degree, or have completed the equivalent of two years of full-time undergraduate university study.', 'General', 2);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 30, 2);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("Australia", 2);

INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (1, "Submit an application", "Candidate", "4 weeks", "","In-principle approval letter or rejection letter", 2);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (2, "Get the pass issued", "Candidate, company representative or employment agency", "Immediate", "Within 3 months of in-principle approval","Notification letter", 2);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (3, "Register fingerprints and photo (if required)", "Candidate", "Immediate", "Within 2 weeks after pass is issued","Acknowledgment of card delivery", 2);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (4, "Receive the card", "Authorised recipients or candidate", "Immediate", "4 working days after registration or document verification","Work Holiday Pass card", 2);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 99, 3);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("All", 3);

INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (1, "Submit an application", "Employer or employment agency", "3 weeks", "","In-principle approval letter or rejection letter", 3);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (2, "Get the pass issued", "Employer or employment agency", "Immediate", "Within 6 months of in-principle approval","Notification letter", 3);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (3, "Register fingerprints and photo (if required)", "Candidate", "Immediate", "Within 2 weeks after pass is issued","Acknowledgment of card delivery", 3);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (4, "Receive the card", "Authorised recipients or candidate", "Immediate", "4 working days after registration or document verification","Employment Pass card", 3);

INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('`<strong>Have started</strong>`, or intend to start, a private limited company registered with ACRA.', 'General', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('If registered, the company must be less than 6 months old on the date you apply.', 'General', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your company raised funding of at least $100,000 from a government investment vehicle, venture capitalist (VC) or business angel that is recognised by a Singapore Government agency.', 'Entrepreneur', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your company is an existing incubatee at an incubator or accelerator in Singapore that is recognised by the Government.', 'Entrepreneur', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You have significant business experience or network and promising entrepreneurial track record of starting highly-scalable businesses and want to establish, develop and manage a new or existing business in Singapore.', 'Entrepreneur', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You or your company holds an intellectual property (IP), registered with an approved national IP institution, which delivers a significant competitive advantage to your proposed business that cannot be easily replicated.', 'Innovator', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('Your company has an ongoing research collaboration with a research institution under the Agency for Science, Technology and Research (A*STAR), an Institute of Higher Learning (IHL) in Singapore.', 'Innovator', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('You have exceptional technical or domain expertise in an area related to your proposed business.', 'Innovator', 4);
INSERT INTO Plan_Eligibility_Details (content, category, planId) values ('To find out more about the eligibility criteria, you can contact Enterprise Singapore at enquiry@enterprisesg.gov.sg.', 'Investor', 4);

INSERT INTO Plan_Age_Eligibility (lower_bound_age, upper_bound_age, planId) values (18, 99, 4);

INSERT INTO Plan_Country_Eligibility (country, planId) values ("All", 4);

INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (1, "Submit an application", "Candidate", "8 weeks", "","In-principle approval letter or rejection letter", 4);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (2, "Get the pass issued", "Candidate, company representative or employment agency", "Immediate", "Within 6 months of in-principle approval","Notification letter", 4);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (3, "Register fingerprints and photo (if required)", "Candidate", "Immediate", "Within 2 weeks after pass is issued","Acknowledgment of card delivery", 4);
INSERT INTO Plan_Step (sequence, content, owner, processing_time, deadline, result, planId) values (4, "Receive the card", "Authorised recipients or candidate", "Immediate", "4 working days after registration or document verification","EntrePass card", 4);

-- Down
DROP TABLE Destination;
DROP TABLE Role;
DROP TABLE Plan;
DROP TABLE Plan_Cost;
DROP TABLE Source;
DROP TABLE Plan_Eligibility_Details;
DROP TABLE Plan_Age_Eligibility;
DROP TABLE Plan_Country_Eligibility;
DROP TABLE Plan_Step;