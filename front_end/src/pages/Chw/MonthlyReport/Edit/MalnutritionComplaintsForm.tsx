import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const MalnutritionComplaintsForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Complaints: Malnutrition</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={report.report.complaints.malnutrition.oneToFour.male}
            femaleValue={report.report.complaints.malnutrition.oneToFour.female}
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      oneToFour: {
                        ...report.report.complaints.malnutrition.oneToFour,
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
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      oneToFour: {
                        ...report.report.complaints.malnutrition.oneToFour,
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
            maleValue={report.report.complaints.malnutrition.fiveToNine.male}
            femaleValue={
              report.report.complaints.malnutrition.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fiveToNine: {
                        ...report.report.complaints.malnutrition.fiveToNine,
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
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fiveToNine: {
                        ...report.report.complaints.malnutrition.fiveToNine,
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
            maleValue={report.report.complaints.malnutrition.tenToFourteen.male}
            femaleValue={
              report.report.complaints.malnutrition.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      tenToFourteen: {
                        ...report.report.complaints.malnutrition.tenToFourteen,
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
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      tenToFourteen: {
                        ...report.report.complaints.malnutrition.tenToFourteen,
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
              report.report.complaints.malnutrition.fifteenToNineteen.male
            }
            femaleValue={
              report.report.complaints.malnutrition.fifteenToNineteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fifteenToNineteen: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fifteenToNineteen: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.twentyToTwentyFour.male
            }
            femaleValue={
              report.report.complaints.malnutrition.twentyToTwentyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      twentyToTwentyFour: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      twentyToTwentyFour: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.complaints.malnutrition.twentyFiveToTwentyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.malnutrition
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
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      twentyFiveToTwentyNine: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.thirtyToThirtyFour.male
            }
            femaleValue={
              report.report.complaints.malnutrition.thirtyToThirtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      thirtyToThirtyFour: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.complaints.malnutrition.thirtyFiveToThirtyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.malnutrition
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
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      thirtyFiveToThirtyNine: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.fortyToFortyFour.male
            }
            femaleValue={
              report.report.complaints.malnutrition.fortyToFortyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fortyToFortyFour: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fortyToFortyFour: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.fortyFiveToFortyNine.male
            }
            femaleValue={
              report.report.complaints.malnutrition.fortyFiveToFortyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fortyFiveToFortyNine: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.complaints.malnutrition.fiftyToFiftyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fiftyToFiftyFour: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.fiftyFiveToFiftyNine.male
            }
            femaleValue={
              report.report.complaints.malnutrition.fiftyFiveToFiftyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      fiftyFiveToFiftyNine: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.complaints.malnutrition.sixtyToSixtyFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      sixtyToSixtyFour: {
                        ...report.report.complaints.malnutrition
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
              report.report.complaints.malnutrition.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.complaints.malnutrition.sixtyFiveOrMore.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.malnutrition
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
                  complaints: {
                    ...report.report.complaints,
                    malnutrition: {
                      ...report.report.complaints.malnutrition,
                      sixtyFiveOrMore: {
                        ...report.report.complaints.malnutrition
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

export default MalnutritionComplaintsForm;
