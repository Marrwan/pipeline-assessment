        // import calculateAge and use it
        const calculateAge = require('../services/calculateAge');

        exports.index = async(req, res) => {
            try {
                const dob = req.query.dob;
                // check if date in not input correctly formatted
                // if(!dob.match(/^\d{1,2}-\d{1,2}-\d{4}$/)) {
                //     res.status(400).send('Date of birth is not in the correct format');
                // }

            if (!dob) {
                    res.status(400).json({status: 'error', message:'provide a date of birth'});
                } else if (dob.length < 6 || dob.length > 10) {
            return res.status(400).json({ status: 'error', message: 'Date of birth is not in the correct format' });
        } 
        const age = await calculateAge(dob);
            if (age < 0) {
                 return   res.status(400).json({status: 'error', message:'date of birth is in the future'});
                } else {
                  return  res.status(200).json({status: 'success', age: age})
            }
        } catch (err) {
                res.status(500).json({status: 'error', message: err.message})
            }
            }

