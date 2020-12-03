import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const OrsDistributedDutiesForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Duties Performed: Ors Distributed</Heading>
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
              report.report.dutiesPerformed.orsDistributed.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      oneToFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      oneToFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.fortyFiveToFortyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.fortyFiveToFortyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.fiftyFiveToFiftyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.fiftyFiveToFiftyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.orsDistributed
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
              report.report.dutiesPerformed.orsDistributed.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.orsDistributed.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.orsDistributed
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
                    orsDistributed: {
                      ...report.report.dutiesPerformed.orsDistributed,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.orsDistributed
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

export default OrsDistributedDutiesForm;
