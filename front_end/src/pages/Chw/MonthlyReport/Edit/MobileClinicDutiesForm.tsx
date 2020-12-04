import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const MobileClinicDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Mobile Clinics</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance.oneToFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance.oneToFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      oneToFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .oneToFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      oneToFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .oneToFour,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance.fiveToNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance.fiveToNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fiveToNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fiveToNine,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance.tenToFourteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance.tenToFourteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .tenToFourteen,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .tenToFourteen,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fifteenToNineteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fifteenToNineteen,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fifteenToNineteen,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .twentyToTwentyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .twentyToTwentyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .twentyToTwentyFour,
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
              report.report.dutiesPerformed.mobileClinicAssistance
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .thirtyToThirtyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .thirtyToThirtyFour,
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
              report.report.dutiesPerformed.mobileClinicAssistance
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fortyToFortyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fortyToFortyFour,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fortyFiveToFortyNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fortyFiveToFortyNine,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fiftyToFiftyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fiftyToFiftyFour,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fiftyFiveToFiftyNine,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .fiftyFiveToFiftyNine,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .sixtyToSixtyFour,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .sixtyToSixtyFour,
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
            maleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.mobileClinicAssistance
                .sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .sixtyFiveOrMore,
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
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    mobileClinicAssistance: {
                      ...report.report.dutiesPerformed.mobileClinicAssistance,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.mobileClinicAssistance
                          .sixtyFiveOrMore,
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

export default MobileClinicDutiesForm;
