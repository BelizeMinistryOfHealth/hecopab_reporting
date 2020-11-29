import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const ComplaintsForm = (props: ChwEditFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Complaints: Fever</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.complaints.fever.oneToFour.male}
            femaleValue={report.report.complaints.fever.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      oneToFour: {
                        ...report.report.complaints.fever.oneToFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      oneToFour: {
                        ...report.report.complaints.fever.oneToFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'oneToFour.male'}
            femaleFieldName={'oneToFour.female'}
          />
          <ChwFormField
            label={'5 - 9: '}
            maleValue={report.report.complaints.fever.fiveToNine.male}
            femaleValue={report.report.complaints.fever.fiveToNine.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fiveToNine: {
                        ...report.report.complaints.fever.fiveToNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fiveToNine: {
                        ...report.report.complaints.fever.fiveToNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiveToNine.male'}
            femaleFieldName={'fiveToNine.female'}
          />
          <ChwFormField
            label={'10 - 14: '}
            maleValue={report.report.complaints.fever.tenToFourteen.male}
            femaleValue={report.report.complaints.fever.tenToFourteen.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      tenToFourteen: {
                        ...report.report.complaints.fever.tenToFourteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      tenToFourteen: {
                        ...report.report.complaints.fever.tenToFourteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'tenToFourteen.male'}
            femaleFieldName={'tenToFourteen.female'}
          />
          <ChwFormField
            label={'15 - 19: '}
            maleValue={report.report.complaints.fever.fifteenToNineteen.male}
            femaleValue={
              report.report.complaints.fever.fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fifteenToNineteen: {
                        ...report.report.complaints.fever.fifteenToNineteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fifteenToNineteen: {
                        ...report.report.complaints.fever.fifteenToNineteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fifteenToNineteen.male'}
            femaleFieldName={'fifteenToNineteen.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'20 - 24: '}
            maleValue={report.report.complaints.fever.twentyToTwentyFour.male}
            femaleValue={
              report.report.complaints.fever.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      twentyToTwentyFour: {
                        ...report.report.complaints.fever.twentyToTwentyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      twentyToTwentyFour: {
                        ...report.report.complaints.fever.twentyToTwentyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyToTwentyFour.male'}
            femaleFieldName={'twentyToTwentyFour.female'}
          />
          <ChwFormField
            label={'25 - 29: '}
            maleValue={
              report.report.complaints.fever.twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.complaints.fever.twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.fever
                          .twentyFiveToTwentyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.fever
                          .twentyFiveToTwentyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyFiveToTwentyNine.male'}
            femaleFieldName={'twentyFiveToTwentyNine.female'}
          />
          <ChwFormField
            label={'30 - 34: '}
            maleValue={report.report.complaints.fever.thirtyToThirtyFour.male}
            femaleValue={
              report.report.complaints.fever.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.fever.thirtyToThirtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.fever.thirtyToThirtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyToThirtyFour.male'}
            femaleFieldName={'thirtyToThirtyFour.female'}
          />
          <ChwFormField
            label={'35 - 39: '}
            maleValue={
              report.report.complaints.fever.thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.complaints.fever.thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.fever
                          .thirtyFiveToThirtyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.fever
                          .thirtyFiveToThirtyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyFiveToThirtyNine.male'}
            femaleFieldName={'thirtyFiveToThirtyNine.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'40 - 44: '}
            maleValue={report.report.complaints.fever.fortyToFortyFour.male}
            femaleValue={report.report.complaints.fever.fortyToFortyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fortyToFortyFour: {
                        ...report.report.complaints.fever.fortyToFortyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fortyToFortyFour: {
                        ...report.report.complaints.fever.fortyToFortyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyToFortyFour.male'}
            femaleFieldName={'fortyToFortyFour.female'}
          />
          <ChwFormField
            label={'45 - 49: '}
            maleValue={report.report.complaints.fever.fortyFiveToFortyNine.male}
            femaleValue={
              report.report.complaints.fever.fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.fever.fortyFiveToFortyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.fever.fortyFiveToFortyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyFiveToFortyNine.male'}
            femaleFieldName={'fortyFiveToFortyNine.female'}
          />
          <ChwFormField
            label={'50 - 54: '}
            maleValue={report.report.complaints.fever.fiftyToFiftyFour.male}
            femaleValue={report.report.complaints.fever.fiftyToFiftyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.fever.fiftyToFiftyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.fever.fiftyToFiftyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyToFiftyFour.male'}
            femaleFieldName={'fiftyToFiftyFour.female'}
          />
          <ChwFormField
            label={'55 - 59: '}
            maleValue={report.report.complaints.fever.fiftyFiveToFiftyNine.male}
            femaleValue={
              report.report.complaints.fever.fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.fever.fiftyFiveToFiftyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.fever.fiftyFiveToFiftyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyFiveToFiftyNine.male'}
            femaleFieldName={'fiftyFiveToFiftyNine.female'}
          />
        </Box>

        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'60 - 64: '}
            maleValue={report.report.complaints.fever.sixtyToSixtyFour.male}
            femaleValue={report.report.complaints.fever.sixtyToSixtyFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.fever.sixtyToSixtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.fever.sixtyToSixtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyToSixtyFour.male'}
            femaleFieldName={'sixtyToSixtyFour.female'}
          />
          <ChwFormField
            label={'65+: '}
            maleValue={report.report.complaints.fever.sixtyFiveOrMore.male}
            femaleValue={report.report.complaints.fever.sixtyFiveOrMore.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.fever.sixtyFiveOrMore,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    fever: {
                      ...report.report.complaints.fever,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.fever.sixtyFiveOrMore,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyFiveOrMore.male'}
            femaleFieldName={'sixtyFiveOrMore.female'}
          />
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default ComplaintsForm;
